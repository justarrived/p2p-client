import moment from 'moment';
import { JOB_O_RECEIVE, JOBS_O_REQUEST, JOBS_O_RECEIVE,
  JOB_O_SELECT, JOB_O_SELECT_DONE } from '../actions/ownedJobs';
import { SESSION_REMOVE } from '../actions/session';

import { parseDateInfo } from '../networking/json';

const initialState = {
  assigned: [],
  unassigned: [],
  historic: [],
  loading: false,
  error: null,
  selectedJob: null,
  selectInitialized: false,
};

function getErrorState(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}

function removeMatchingJob(array, job) {
  array.forEach(
    (arrayJob, index, oldArray) => {
      if (arrayJob.id === job.data.id) {
        oldArray.splice(index, 1);
      }
    });
  return array;
}

// Return true if the 'day' is before current day
function historicDate(dateString) {
  return moment(dateString).isBefore(moment(), 'day');
}

export default function (state = initialState, action) {
  switch (action.type) {
    case JOBS_O_RECEIVE: {
      // Receice all owned jobs
      if (action.error != null) {
        return getErrorState(state, action);
      }
      const assigned = [];
      const unassigned = [];
      const historic = [];
      if (action.jobJson.data != null) {
        // Loop through all the jobs
        action.jobJson.data.forEach(
          (job) => {
            // Add each job to appropriate collection
            if (historicDate(job.attributes.job_date)) {
              historic.push(job);
            } else if (job.attributes.filled) {
              assigned.push(job);
            } else {
              unassigned.push(job);
            }
          });
      }
      return {
        ...state,
        assigned,
        unassigned,
        historic,
        loading: false,
        error: null,
      };
    }
    case JOB_O_RECEIVE: {
      // Receive a single owned job
      if (action.error != null) {
        return getErrorState(state, action);
      }
      const newJob = action.jobJson.data;
      // Remove the job if it existed previously
      const assigned = removeMatchingJob(state.assigned, newJob);
      const unassigned = removeMatchingJob(state.unassigned, newJob);
      const historic = removeMatchingJob(state.historic, newJob);
      // Add the job in correct collection
      if (historicDate(newJob.attributes.job_date)) {
        historic.push(newJob);
      } else if (newJob.filled) {
        assigned.push(newJob);
      } else {
        unassigned.push(newJob);
      }
      return {
        ...state,
        assigned,
        unassigned,
        historic,
        loading: false,
        error: null,
      };
    }
    case JOBS_O_REQUEST:
      // starting to fetch data requested
      return {
        ...state,
        loading: true,
        error: null,
      };
    case JOB_O_SELECT: {
      // Select a specific job for inspection
      const selectedJob = action.jobJson;
      selectedJob.attributes.helperDate = parseDateInfo(selectedJob.attributes.job_date);
      return {
        ...state,
        selectedJob,
        selectInitialized: false,
      };
    }
    case JOB_O_SELECT_DONE:
      return {
        ...state,
        selectInitialized: true,
      };
    case SESSION_REMOVE:
      // Remove local data when user signs out
      return initialState;
    default:
      return state;
  }
}

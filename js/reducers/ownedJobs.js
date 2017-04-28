import { JOB_O_RECEIVE, JOBS_O_REQUEST,
  JOBS_O_RECEIVE, JOBS_O_SELECT } from '../actions/ownedJobs';
import { SESSION_REMOVE } from '../actions/session';

import { parseDateInfo } from '../networking/json';

const initialState = {
  data: [],
  assigned: [],
  unassigned: [],
  historic: [],
  loading: false,
  error: null,
  selectedJob: null,
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

export default function (state = initialState, action) {
  // console.log(`previous owned jobs state:\n${JSON.stringify(state, null, 4)}`);
  if (action.type === JOBS_O_RECEIVE) {
    // Receice all owned jobs
    if (action.error != null) {
      return getErrorState(state, action);
    }
    const assigned = [];
    const unassigned = [];
    const historic = [];
    if (action.jobJson.data != null) {
      action.jobJson.data.forEach(
        (job) => {
          // TODO sort by date instead of upcoming!
          if (job.attributes.upcoming) {
            if (job.attributes.filled) {
              assigned.push(job);
            } else {
              unassigned.push(job);
            }
          } else {
            historic.push(job);
          }
        });
    }
    return {
      ...state,
      data: action.jobJson.data,
      assigned,
      unassigned,
      historic,
      loading: false,
      error: null,
    };
  }
  if (action.type === JOB_O_RECEIVE) {
    // Receive a single owned job
    if (action.error != null) {
      return getErrorState(state, action);
    }
    const newJob = action.jobJson.data;
    const assigned = removeMatchingJob(state.assigned, newJob);
    const unassigned = removeMatchingJob(state.unassigned, newJob);
    const historic = removeMatchingJob(state.historic, newJob);
    // TODO sort by date instead of upcoming!
    if (newJob.attributes.upcoming) {
      if (newJob.filled) {
        assigned.push(newJob);
      } else {
        unassigned.push(newJob);
      }
    } else {
      historic.push(newJob);
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
  if (action.type === JOBS_O_REQUEST) {
    // Complete refresh requested
    return {
      ...state,
      loading: true,
      error: null,
    };
  }
  if (action.type === JOBS_O_SELECT) {
    // Select a specific job for inspection
    const selectedJob = action.jobJson;
    selectedJob.attributes.helperDate = parseDateInfo(selectedJob.attributes.job_date);
    return {
      ...state,
      selectedJob,
    };
  }
  if (action.type === SESSION_REMOVE) {
    // Remove local data when user signs out
    return initialState;
  }
  return state;
}

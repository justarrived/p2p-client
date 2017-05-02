import { JOB_REQUEST, JOB_RECEIVE, JOB_CREATE, JOB_UPDATE,
  JOBS_REQUEST, JOBS_RECEIVE } from '../actions/jobs';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  jobId: null,
  jobJson: null,
  jobLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case JOB_REQUEST:
      // A request for a job has been sent
      return {
        ...state,
        jobId: action.userId,
        jobLoading: true,
      };
    case JOBS_REQUEST:
      // A request for a job has been sent
      return {
        ...state,
        jobId: null,
        jobLoading: true,
      };
    case JOB_RECEIVE: {
      if (action.jobJson === null) {
        // No data received. Save error
        return {
          ...state,
          jobId: null,
          jobLoading: false,
          error: action.error,
        };
      }
      // Receive and save a job object
      let newJobJson;
      if (state.jobJson === null) {
        // If no other jobs exists in state
        newJobJson = {
          data: [action.jobJson.data],
        };
      } else {
        // There are other jobs in state.
        // First remove any old version of the job
        state.jobJson.data.forEach(
          (oldJob, index, oldArray) => {
            if (oldJob.id === action.jobJson.data.id) {
              oldArray.splice(index, 1);
            }
          });
        // add the new job
        newJobJson = {
          data: [...state.jobJson.data, action.jobJson.data],
        };
      }
      return {
        ...state,
        jobId: action.userId,
        jobJson: newJobJson,
        jobLoading: false,
        error: action.error,
      };
    }
    case JOBS_RECEIVE:
      // Receive and save all jobs
      return {
        ...state,
        jobId: null,
        jobJson: action.jobJson,
        jobLoading: false,
        error: action.error,
      };
    case JOB_CREATE:
      // Request for job to be created has been sent
      return {
        ...state,
        jobLoading: true,
        error: null,
      };
    case JOB_UPDATE:
      // Request for user to be updated has been sent
      return {
        ...state,
        jobLoading: true,
        error: null,
      };
    case SESSION_REMOVE:
      // Remove local data when user signs out
      return initialState;
    default:
      return state;
  }
}

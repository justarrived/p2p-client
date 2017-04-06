/*
  Initial state is temporarily set to contain a job for demonstrational purposes.
  The initial state has the same structure as the response from the API.
  TODO Replace initial state with real data from API.
*/
const initialState = {
  data: [
    {
      id: '1',
      type: 'jobs',
      attributes: {
        name: 'Lövkrattning',
        street: 'Bankgatan 14C',
      },
    },
  ],
};

export default function (state = initialState, action) {
  return state;
}

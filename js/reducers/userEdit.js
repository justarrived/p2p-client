import {
  USER_E_FIRSTNAME, USER_E_LASTNAME, USER_E_STREET, USER_E_ZIP,
  USER_E_CITY, USER_E_PHONE, USER_E_EMAIL, USER_E_PASSWORD,
  USER_E_CONSENT, USER_E_ATTRIBUTES, USER_E_TOGGLE_INPUT,
} from '../actions/userEdit';
import { SESSION_REMOVE } from '../actions/session';

const initialState = {
  attributes: {
    first_name: '',
    last_name: '',
    street: '',
    zip: '',
    city: '',
    phone: '',
    email: '',
    password: '',
    consent: false, // User accepts terms
  },
  initialized: false,
  disabled: true,
};

export default function (state = initialState, action) {
  // console.log(`User edit state action: '${action.type}`);
  // console.log(`User edit state:\n'${JSON.stringify(state, null, 4)}`);
  switch (action.type) {
    case USER_E_ATTRIBUTES:
      return {
        ...state,
        attributes: action.payload,
        initialized: true,
      };
    case USER_E_FIRSTNAME:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          first_name: action.payload,
        },
      };
    case USER_E_LASTNAME:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          last_name: action.payload,
        },
      };
    case USER_E_STREET:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          street: action.payload,
        },
      };
    case USER_E_ZIP:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          zip: action.payload,
        },
      };
    case USER_E_CITY:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          city: action.payload,
        },
      };
    case USER_E_PHONE:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          phone: action.payload,
        },
      };
    case USER_E_EMAIL:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          email: action.payload,
        },
      };
    case USER_E_PASSWORD:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          password: action.payload,
        },
      };
    case USER_E_CONSENT:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          consent: !state.attributes.consent,
        },
      };
    case USER_E_TOGGLE_INPUT:
      return {
        ...state,
        disabled: action.payload,
      };
    case SESSION_REMOVE:
      // Remove local data when user signs out
      return initialState;
    default:
      return state;
  }
}

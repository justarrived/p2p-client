import {
  ACCOUNT_FIRSTNAME, ACCOUNT_LASTNAME, ACCOUNT_ADDRESS, ACCOUNT_POSTCODE,
  ACCOUNT_POSTAREA, ACCOUNT_PHONENUMBER, ACCOUNT_EMAIL, ACCOUNT_PASSWORD,
  TOGGLE_INPUT_DISABLED, ACCOUNT_USER_AGREEMENT,
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
  switch (action.type) {
    case ACCOUNT_FIRSTNAME:
      return {
        ...state,
        first_name: action.payload,
      };
    case ACCOUNT_LASTNAME:
      return {
        ...state,
        last_name: action.payload,
      };
    case ACCOUNT_ADDRESS:
      return {
        ...state,
        street: action.payload,
      };
    case ACCOUNT_POSTCODE:
      return {
        ...state,
        zip: action.payload,
      };
    case ACCOUNT_POSTAREA:
      return {
        ...state,
        city: action.payload,
      };
    case ACCOUNT_PHONENUMBER:
      return {
        ...state,
        phone: action.payload,
      };
    case ACCOUNT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ACCOUNT_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case TOGGLE_INPUT_DISABLED:
      return {
        ...state,
        disabled: !state.disabled,
      };
    case ACCOUNT_USER_AGREEMENT:
      return {
        ...state,
        consent: !state.consent,
      };
    case SESSION_REMOVE:
      // Remove local data when user signs out
      return initialState;
    default:
      return state;
  }
}

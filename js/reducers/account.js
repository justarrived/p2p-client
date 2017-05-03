import {
  ACCOUNT_FIRSTNAME, ACCOUNT_LASTNAME, ACCOUNT_ADDRESS, ACCOUNT_POSTCODE,
  ACCOUNT_POSTAREA, ACCOUNT_PHONENUMBER, ACCOUNT_EMAIL, ACCOUNT_PASSWORD,
  TOGGLE_INPUT_DISABLED, ACCOUNT_USER_AGREEMENT,
} from '../actions/account';

const initialState = {
  firstName: 'Anton',
  lastName: 'Smith',
  address: ' ',
  postCode: '',
  postArea: '',
  phoneNumber: '',
  email: '',
  password: '',
  userAgreement: false,
  disabled: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case ACCOUNT_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case ACCOUNT_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case ACCOUNT_POSTCODE:
      return {
        ...state,
        postCode: action.payload,
      };
    case ACCOUNT_POSTAREA:
      return {
        ...state,
        postArea: action.payload,
      };
    case ACCOUNT_PHONENUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case ACCOUNT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ACCOUNT_PASSWORD:
      return {
        ...state,
        email: action.payload,
      };
    case TOGGLE_INPUT_DISABLED:
      return {
        ...state,
        disabled: !state.disabled,
      };
    case ACCOUNT_USER_AGREEMENT:
      return {
        ...state,
        disabled: !state.userAgreement,
      };
    default:
      return state;
  }
}

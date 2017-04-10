import type { Action } from '../actions/types';
import {
  ACCOUNT_FIRSTNAME, ACCOUNT_LASTNAME, ACCOUNT_ADDRESS, ACCOUNT_POSTCODE,
  ACCOUNT_POSTAREA, ACCOUNT_PHONENUMBER, ACCOUNT_EMAIL, ACCOUNT_PASSWORD,
  TOOGLE_INPUT_DISABLED, ACCOUNT_USER_AGREEMENT,
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

export default function (state : State = initialState, action : Action) : State {
  if (action.type === ACCOUNT_FIRSTNAME) {
    return {
      ...state,
      firstName: action.payload,
    };
  }
  if (action.type === ACCOUNT_LASTNAME) {
    return {
      ...state,
      lastName: action.payload,
    };
  }
  if (action.type === ACCOUNT_ADDRESS) {
    return {
      ...state,
      address: action.payload,
    };
  }
  if (action.type === ACCOUNT_POSTCODE) {
    return {
      ...state,
      postCode: action.payload,
    };
  }
  if (action.type === ACCOUNT_POSTAREA) {
    return {
      ...state,
      postArea: action.payload,
    };
  }
  if (action.type === ACCOUNT_PHONENUMBER) {
    return {
      ...state,
      phoneNumber: action.payload,
    };
  }
  if (action.type === ACCOUNT_EMAIL) {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === ACCOUNT_PASSWORD) {
    return {
      ...state,
      password: action.payload,
    };
  }
  if (action.type === TOOGLE_INPUT_DISABLED) {
    console.log('DISABLE');
    return {
      ...state,
      disabled: !state.disabled,
    };
  }
  if (action.type === ACCOUNT_USER_AGREEMENT) {
    return {
      ...state,
      userAgreement: !state.userAgreement,
    };
  }
  return state;
}

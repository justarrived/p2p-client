export type Action = {
  type: 'CHANGE_NAME',
  route: string
} | {
  type: 'DECREASE_AGE'
} | {
  type: 'INCREASE_AGE'
} | {
  type: 'ADD_LANGUAGE',
  route: string
} | {
  type: 'REMOVE_LANGUAGE',
  route: string
} | {
type: 'ACCOUNT_FIRSTNAME',
  route: string
} | {
type: 'ACCOUNT_LASTNAME',
  LastName: string
} | {
type: 'ACCOUNT_ADDRESS',
  address: string
} | {
type: 'ACCOUNT_POSTCODE',
  postCode: string
} | {
type: 'ACCOUNT_POSTAREA',
  postArea: string
} | {
type: 'ACCOUNT_PHONENUMBER',
  phoneNumber: string
} | {
type: 'ACCOUNT_EMAIL',
  email: string
} | {
type: 'ACCOUNT_PASSWORD',
  password: string
} | {
type: 'TOOGLE_INPUT_DISABLED',
} | {
type: 'ACCOUNT_USER_AGREEMENT',
} | {
type: 'SESSION_REQUEST',
} | {
type: 'SESSION_RECEIVE',
} | {
type: 'SESSION_REMOVE',
}

export type Dispatch = (action : Action | Array < Action >) => any;
export type GetState = () => Object;
export type PromiseAction = Promise < Action >;

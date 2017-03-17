export type Action = {
  type: 'PUSH_NEW_ROUTE',
  route: string
} | {
  type: 'POP_ROUTE'
} | {
  type: 'POP_TO_ROUTE',
  route: string
} | {
  type: 'REPLACE_ROUTE',
  route: string
} | {
  type: 'REPLACE_OR_PUSH_ROUTE',
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
}


export type Dispatch = (action : Action | Array < Action >) => any;
export type GetState = () => Object;
export type PromiseAction = Promise < Action >;

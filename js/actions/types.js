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
}

export type Dispatch = (action : Action | Array < Action >) => any;
export type GetState = () => Object;
export type PromiseAction = Promise < Action >;

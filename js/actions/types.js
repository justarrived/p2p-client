export type Action = {
  type: 'CHANGE_NAME',
  route: string
} | {
  type: 'DECREASE_AGE'
} | {
  type: 'INCREASE_AGE'
}

export type Dispatch = (action : Action | Array < Action >) => any;
export type GetState = () => Object;
export type PromiseAction = Promise < Action >;

import type {Action} from '../actions/types';
import {CHANGE_NAME} from '../actions/person';
import {INCREASE_AGE} from '../actions/person';
import {DECREASE_AGE} from '../actions/person';

export type State = {
    // gör denna ens något?
}

const initialState = {
    name: 'Bill',
    age: 200,
    lang: ['Svenska', 'English']
};

export default function(state : State = initialState, action : Action) : State {
    if(action.type === CHANGE_NAME) {
        console.log('i reducer name');
        return {
            ...state,
            name: action.payload
        };
    }
    if (action.type === INCREASE_AGE) {
        console.log('i reducer age');
        return {
            ...state,
            age: state.age + 1
        };
    }
    if (action.type === DECREASE_AGE) {
        console.log('i reducer age');
        return {
            ...state,
            age: state.age - 1
        };
    }
    return state;
}

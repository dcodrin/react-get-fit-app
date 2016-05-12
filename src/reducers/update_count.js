const INITIAL_STATE = 0;

import {UPDATE_COUNT} from '../actions/index';

export default function (state=INITIAL_STATE, action){
    switch (action.type){
        case UPDATE_COUNT:
            console.log(state);
            return state + 1;
        default: return state;
    }
}
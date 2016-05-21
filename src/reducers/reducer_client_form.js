const INITIAL_STATE = {};

import {FETCH_FORM, POST_FORM} from '../actions/index';


export default function(state = INITIAL_STATE, action){
console.log(action)
    switch(action.type){
        case FETCH_FORM:
            return {...state, [action.payload.id]: action.payload.data};
        case POST_FORM:
            return {...state, [action.payload.id]: action.payload.data};
        default: return state;
    }
}
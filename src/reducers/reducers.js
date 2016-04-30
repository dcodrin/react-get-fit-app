import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import UpdateCountReducer from './update_count';

const rootReducer = combineReducers({
    count: UpdateCountReducer,
    form: formReducer
});

export default rootReducer;
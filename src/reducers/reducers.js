import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import UpdateCountReducer from './update_count';


import ClientForm from './reducer_client_form';

const rootReducer = combineReducers({
    clientForm: ClientForm,
    count: UpdateCountReducer,
    form: formReducer
});

export default rootReducer;
import React from 'react';
import ReactDOM from 'react-dom';
//The provider should wrap our whole application so that it can communicate with data store.
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
//ReduxPromise checks if the 'payload' key is a promise. It waits for the promise to be resolved, once resolved it dispatches the result. It unwraps the promise.
import ReduxPromise from 'redux-promise';
import {Router, Route, browserHistory} from 'react-router';
import promise from 'redux-promise';
import routes from './routes/routes';
//End Import Modules

import App from './components/App.js';
//With all the reducers combined i am Captain Reducer
import reducers from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
</Provider>, document.querySelector('#app'));



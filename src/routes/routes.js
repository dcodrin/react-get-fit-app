import React from 'react';
import {Route, IndexRoute} from 'react-router';

//The routes are the individual React components
import App from '../components/App.js';

export default (
    <Route path="/public" component={App}>
        /* All routes should be nested here */
    </Route>
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AUTH_USER } from './actions/types';

// Glue between react and redux (reaches into store)
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

// Middleware to write action creators
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Logger middleware
const logger = store => {
	return next => {
		return action => {
			const result = next(action);
			return result;
		}
	}
};

// Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store contains all the reducers
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk, logger)));

const token = localStorage.getItem('token');
// if we have a token, consider the user to be signed in
if (token) {
  // need to update the application state
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import reduxThunk from 'redux-thunk';

// import App from './components/App';
// import Signin from './components/auth/signin';
// import Signup from './components/auth/signup';
// import Signout from './components/auth/signout';
// import Landing from './components/Landing';
// import RequireAuth from './components/auth/require_auth';
// import reducers from './reducers';
// import { AUTH_USER } from './actions/types';

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

// const token = localStorage.getItem('token');
// // If we have a token, consider the user to be signed in
// if (token) {
//   // we need to update application state (action creator)
//   store.dispatch({ type: AUTH_USER });
// }

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={App}>
//         <Route path="signin" component={Signin} />
//         <Route path="signup" component={Signup} />
//         <Route path="signout" component={Signout} />
//         <Route path="feature" component={RequireAuth(Landing)} />
//       </Route>
//     </Router>
//   </Provider>
//   , document.querySelector('.container'));

// GOOGLE OAUTH

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Glue between react and redux (reaches into store)
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

// Middleware that allows you to write action creators that return a function instead of an action
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

// Logger middleware
const logger = store => {
	return next => {
		return action => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] Updated State', store.getState());
			return result;
		}
	}
};

// Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store contains all the reducers
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk, logger)));

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
); 

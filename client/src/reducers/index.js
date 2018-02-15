import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as form } from 'redux-form';

// Combines all the reducers
export default combineReducers({
    form,
    auth: authReducer
});
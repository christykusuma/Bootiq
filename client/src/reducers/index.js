import { combineReducers } from 'redux';
import authReducer from './authReducer';
import brandReducer from './brandReducer';
import categoryReducer from './categoryReducer';
import { reducer as form } from 'redux-form';

// Combines all the reducers
export default combineReducers({
    form,
    auth: authReducer,
    brands: brandReducer,
    categories: categoryReducer
});
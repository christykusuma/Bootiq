import { combineReducers } from 'redux';
import authReducer from './authReducer';
import brandReducer from './brandReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import { reducer as form } from 'redux-form';

// Combines all the reducers
export default combineReducers({
    auth: authReducer,
    brands: brandReducer,
    categories: categoryReducer,
    products: productReducer
});
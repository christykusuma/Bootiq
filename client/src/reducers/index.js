import { combineReducers } from 'redux';
import authReducer from './authReducer';
import brandReducer from './brandReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';
// import cartReducer from './cartReducer';
import { reducer as form } from 'redux-form';

// Combines all the reducers
export default combineReducers({
    form,
    auth: authReducer,
    brands: brandReducer,
    categories: categoryReducer,
    products: productReducer,
    user: userReducer,
    // cart: cartReducer
});
import axios from 'axios';

import {  
  FETCH_USER, 
  FETCH_BRANDS, 
  FETCH_CATEGORIES,
  FETCH_SUBCATEGORIES,
  FETCH_PRODUCTS,
  AUTH_USER, 
  AUTH_ERROR, 
  UNAUTH_USER  
} from './types';
import { BrowserRouter as Router, Redirect} from "react-router-dom";

const ROOT_URL = 'http://localhost:5000'

// Fetches user data
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    console.log('user info', res.data);
	dispatch({ type: FETCH_USER, payload: res.data });
};

// Fetches categories
export const fetchCategories = () => async dispatch => {
    const res = await axios.get('/api/categories/all');
    console.log('all the categories', res.data.categories);
    dispatch({ type: FETCH_CATEGORIES, payload: res.data.categories});
};

// Fetches subcategories
export const fetchSubcategories = () => async dispatch => {
    const res = await axios.get('/api/subcategories/all');

    console.log('all the subcategories', res.data.subcategories);

    dispatch({ type: FETCH_SUBCATEGORIES, payload: res.data.subcategories});
};

// Fetches brands
export const fetchBrands = () => async dispatch => {
    const res = await axios.get('/api/brands/all');
    console.log('all the brands', res.data.brands);
    dispatch({ type: FETCH_BRANDS, payload: res.data.brands});
};

//  Action Creators for Local User: 
export function signupUser({ fname, lname, email, password, dob, city, country,  }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/api/signup`, {fname, lname, email, password, dob, city, country})
            .then(response => {
                dispatch({type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                Redirect('/');
            })
            .catch (response => dispatch(authError("COULD NOT SIGNUP")));
    };
}

// Action Creator to Login User: 
export function signinUser({ email, password }) {
    return function (dispatch) {
        // submit email/password to the server
        axios.post(`${ROOT_URL}/api/signin`, { email, password })
            .then( response => {
                dispatch({type: AUTH_USER });
                // Save the JWT token
                localStorage.setItem('token', response.data.token);
                Router.push('/shop-all');
            })
            .catch( () => {
                dispatch(authError('BAD LOGIN INFO'));
            });
    };
}

// Action Creator to Logout User:
export function signoutUser () {
    localStorage.removeItem('token');
    console.log("LOGGED OUT ")
    return { type: UNAUTH_USER};
}

// AUTH ERROR:
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

// Fetches products
export const fetchProducts = () => async dispatch => {
    const res = await axios.get('/api/products/all');

    console.log('all the products', res.data.products);

    dispatch({ type: FETCH_PRODUCTS, payload: res.data.products});
};

// // Submits a brand
// export const submitBrand = brand => async (dispatch, getState) => {
//     const user = getState().auth.id
//     const res = await axios.post('/api/admin/brands/add', {
//         ...brand,
//         _user: user
//     });

//     console.log('submitted brand', res);

//     dispatch({ type: FETCH_BRANDS, payload: res.data});
// };

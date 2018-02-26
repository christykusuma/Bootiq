import axios from 'axios';
import { BrowserRouter as Router, Redirect} from "react-router-dom";
import {
  FETCH_BRANDS,
  FETCH_CATEGORIES,
  FETCH_SUBCATEGORIES,
  FETCH_PRODUCTS,
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';



// Fetches categories
export const fetchCategories = () => async dispatch => {
    const res = await axios.get('/api/categories/all');
    dispatch({ type: FETCH_CATEGORIES, payload: res.data.categories});
};

// Fetches subcategories
export const fetchSubcategories = () => async dispatch => {
    const res = await axios.get('/api/subcategories/all');
    dispatch({ type: FETCH_SUBCATEGORIES, payload: res.data.subcategories});
};

// Fetches brands
export const fetchBrands = () => async dispatch => {
    const res = await axios.get('/api/brands/all');
    dispatch({ type: FETCH_BRANDS, payload: res.data.brands});
};

// Action Creator to Login User:
export function signinUser({ email, password }) {
    return function (dispatch) {
        // submit email/password to the server
        axios.post(`/api/signin`, { email, password })
            .then( response => {
                dispatch({type: AUTH_USER });
                // Save the JWT token
                localStorage.setItem('token', response.data.token);
                Redirect('/shop-all');
            })
            .catch( () => {
                dispatch(authError('BAD LOGIN INFO'));
            });
    };
}

//  Action Creators for Local User:
export function signupUser({ fname, lname, email, password, dob, city, country  }) {
    return function(dispatch) {
        axios.post(`/api/signup`, {fname, lname, email, password, dob, city, country})
            .then(response => {
                dispatch({type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                Redirect('/');
            })
            .catch (response => dispatch(authError("COULD NOT SIGNUP")));
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
    dispatch({ type: FETCH_PRODUCTS, payload: res.data.products});
};

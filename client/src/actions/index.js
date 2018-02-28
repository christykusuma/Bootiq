import axios from 'axios';
import { BrowserRouter as Router, Redirect} from "react-router-dom";
import {
  FETCH_BRANDS,
  FETCH_CATEGORIES,
  FETCH_SUBCATEGORIES,
  FETCH_PRODUCTS,
  FETCH_CART,
  FETCH_USER,
  AUTH_USER, 
  AUTH_ERROR, 
  UNAUTH_USER
} from './types';

// // Fetches user data
// export const fetchUser = () => async dispatch => {
//     const res = await axios.get('/api/current_user');
//     console.log('user info', res.data);
// 	// dispatch({ type: FETCH_USER, payload: res.data });
// };

// Fetches user data
export function fetchUser() {
    return function(dispatch) {
        axios.get('/', {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            console.log(response.data.user);
            // dispatch({
            //     type: FETCH_USER,
            //     payload: response.data.user
            // });
        });
    }
}

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

// Action creator for Signin user
export const signinUser = user => async dispatch => {
    const res = await axios.post('/api/signin', {
        email: user.email,
        password: user.password
    });

    dispatch({ type: AUTH_USER });
    localStorage.setItem('token', res.data.token);
}

// Action creator for Signup user
export const signupUser = user => async dispatch => {
    const res = await axios.post('/api/signup', {
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        password: user.password,
        city: user.city,
        country: user.country
    });

    dispatch({ type: AUTH_USER });
    localStorage.setItem('token', res.data.token);
}

// Action Creator to Logout User:
export function signoutUser() {
    localStorage.removeItem('token');
    console.log("LOGGED OUT")
    return { type: UNAUTH_USER };
}

// // AUTH ERROR:
// export function authError(error) {
//     return {
//         type: AUTH_ERROR,
//         payload: error
//     };
// }

// Fetches products
export const fetchProducts = () => async dispatch => {
    const res = await axios.get('/api/products/all');
    dispatch({ type: FETCH_PRODUCTS, payload: res.data.products});
};

// Submit product to shopping cart
export const submitProduct = product => async (dispatch, getState) => {
    const user = getState().auth.id;
    console.log('user info:', user);
    console.log('product id', product._id);

	const res = await axios.post('/api/shoppingcart/add', {
        ...product,
        _user: user
	});

    console.log('submitted product to shopping cart successfully');

    // dispatch({ type: FETCH_CART, payload: res.data });
} 

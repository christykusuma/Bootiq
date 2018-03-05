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
  UNAUTH_USER,
  SEARCH_PRODUCT
} from './types';

// Fetches user data
export const fetchUser = () => async dispatch => {
    const res = await axios.post('/api/current_user', {
        token: localStorage.getItem('token')
    });

    console.log('fetched user', res.data.user);

    dispatch({ type: FETCH_USER, payload: res.data.user});

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

// Fetches products
export const fetchProducts = () => async dispatch => {
    const res = await axios.get('/api/products/all');
    dispatch({ type: FETCH_PRODUCTS, payload: res.data.products });
}

// Fetch single product for product page
export const searchProduct = params_id => async dispatch => {
    console.log('fetch product info for product page', params_id);

    const res = await axios.get(`/api/products/${params_id}`);

    dispatch({ type: SEARCH_PRODUCT, payload: res.data });
}

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

// Fetches products
export const fetchCartProducts = () => async dispatch => {
    const res = await axios.get('/api/shoppingcart/all');
    // dispatch({ type: FETCH_PRODUCTS, payload: res.data.products });
};

// Submit product to shopping cart
// export const submitCartProduct = product => async (dispatch, getState) => {
export const submitCartProduct = (product, user) => async (dispatch) => {
    // const user = getState().auth.id;
    // console.log('user info:', user);
    console.log('product id', product._id);
    console.log('user id', user._id);

	const res = await axios.post('/api/shoppingcart/add', {
        ...product,
        user: user._id
	});

    console.log('submitted product to shopping cart successfully');

    // dispatch({ type: FETCH_CART, payload: res.data });
} 

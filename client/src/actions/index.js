// import axios from 'axios';
// import { browserHistory } from 'react-router';
// import { 
//     AUTH_USER, 
//     UNAUTH_USER, 
//     AUTH_ERROR,
//     FETCH_MESSAGE
// } from './types';

// const ROOT_URL = 'http://localhost:3090';

// export function signinUser({ email, password }) {
//     return function(dispatch) {
//         // Submit email/password to the server
//         // { email: email, password: password } below
//         axios.post(`${ROOT_URL}/signin`, { email, password })
//             .then(response => {
//                 // If request is good...
//                 // - Update state to indicate user is authenticated
//                 dispatch({ type: AUTH_USER });
//                 // - Save the JWT token
//                 localStorage.setItem('token', response.data.token);
//                 // - Redirect to the route '/feature'
//                 browserHistory.push('/feature');
//             })
//             .catch(() => {
//                 // If request is bad...
//                 // - Show an error to the user 
//                 dispatch(authError('Bad Login Info'));
//             });
//     }
// }

// // Slight change to error catching, catches error object instead of a response object
// export function signupUser({ email, password }) {
//     return function(dispatch) {
//         axios.post(`${ROOT_URL}/signup`, { email, password })
//             .then(response => {
//                 dispatch({ type: AUTH_USER });
//                 localStorage.setItem('token', response.data.token);
//                 browserHistory.push('/feature');
//             })
//             .catch(error => dispatch(authError(error.response.data.error)));
//     }
// }

// export function authError(error) {
//     return {
//         type: AUTH_ERROR,
//         payload: error
//     };
// }

// export function signoutUser() {
//     localStorage.removeItem('token');
//     return { type: UNAUTH_USER }
// }

// export function fetchMessage() {
//     return function(dispatch) {
//         axios.get(ROOT_URL, {
//             headers: { authorization: localStorage.getItem('token') }
//         })
//             .then(response => {
//                 dispatch({
//                     type: FETCH_MESSAGE,
//                     payload: response.data.message
//                 });
//             });
//     }
// }

import axios from 'axios';
import { 
    FETCH_USER,
    FETCH_BRANDS,
    FETCH_CATEGORIES
} from './types';

// export const fetchUser = () => {
//     return function(dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res}));
//     };
// };

// Fetches user data
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    console.log('user info', res.data);

	dispatch({ type: FETCH_USER, payload: res.data });
};

// Fetches brands
export const fetchCategories = () => async dispatch => {
    const res = await axios.get('/api/categories/all');

    console.log('all the categories', res.data.categories);

    dispatch({ type: FETCH_CATEGORIES, payload: res.data.categories});
};

// Fetches brands
export const fetchBrands = () => async dispatch => {
    const res = await axios.get('/api/brands/all');

    console.log('all the brands', res.data.brands);

    dispatch({ type: FETCH_BRANDS, payload: res.data.brands});
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
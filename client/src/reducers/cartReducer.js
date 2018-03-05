import { FETCH_CART } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_CART:
            return action.payload;
        default:
            return state;
    }
}
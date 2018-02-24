import { FETCH_CART } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CART:
            return action.payload.map(product => {
                return {
                    product_id: product._id,
                    user_id: user._id
                }
            });
        default:
            return state;
    }
}
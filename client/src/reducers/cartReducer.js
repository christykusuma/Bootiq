import { FETCH_CART } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CART:
            return action.payload.map(cart => {
                return {
                    quantity: cart.quantity,
                    _product: cart._product
                }
            });
        default:
            return state;
    }
}
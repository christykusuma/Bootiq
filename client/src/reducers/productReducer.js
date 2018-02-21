import { FETCH_PRODUCTS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload.map(product => {
                return {
                    name: product.name,
                    _id: product._id,
                    price: product.price
                }
            });
        default:
            return state;
    }
}
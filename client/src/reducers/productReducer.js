import { FETCH_PRODUCTS, SEARCH_PRODUCT } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload.map(product => {
                return {
                    name: product.name,
                    _id: product._id,
                    price: product.price,
                    color: product.color,
                    brand: product.brand
                }
            });
        case SEARCH_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}
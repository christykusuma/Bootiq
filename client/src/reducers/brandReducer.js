import { FETCH_BRANDS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_BRANDS:
            return action.payload.map(brand => {
                return {
                    name: brand.name,
                    _id: brand._id
                }
            });
        default:
            return state;
    }
}
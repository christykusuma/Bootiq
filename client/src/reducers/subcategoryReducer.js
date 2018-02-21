import { FETCH_SUBCATEGORIES } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_SUBCATEGORIES:
            return action.payload.map(subcategory => {
                return {
                    name: subcategory.name,
                    _id: subcategory._id
                }
            });
        default:
            return state;
    }
}
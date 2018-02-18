import { FETCH_CATEGORIES } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.payload.map(category => {
                return {
                    name: category.name,
                    _id: category._id
                }
            });
        default:
            return state;
    }
}
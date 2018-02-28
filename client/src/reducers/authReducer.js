import {
    AUTH_USER,
    UNAUTH_USER,
    // AUTH_ERROR,
} from '../actions/types';

// State will always be either null, user model or false
export default function(state = false, action) {
	switch (action.type) {
		case AUTH_USER:
            return { ...state, auth: true };
        case UNAUTH_USER:
            return { ...state, auth: false };
        // case AUTH_ERROR:
        //     return { ...state, error: action.payload };
		default:
			return state;
	}
}

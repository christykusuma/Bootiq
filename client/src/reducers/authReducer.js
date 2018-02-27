import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from '../actions/types';

// State will always be either null, user model or false
export default function(state = null, action) {
	switch (action.type) {
		case AUTH_USER:
            return { ...state, error: '', auth: true, user: action.payload };
        case UNAUTH_USER:
            return { ...state, auth: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_MESSAGE:
            return { ...state, message: action.payload };
		default:
			return state;
	}
}

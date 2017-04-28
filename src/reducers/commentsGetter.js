import { GET_COMMENTS } from '../constants/ActionTypes';

export default function comments(state = {}, action) {
    switch (action.type) {
        case GET_COMMENTS + '_FULFILLED':
            return action.payload;
        case GET_COMMENTS + '_PENDING':
            return { pendingMessage: "LOADING..." };
        default:
            return state;
    }

}




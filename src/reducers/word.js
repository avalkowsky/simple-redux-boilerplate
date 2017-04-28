import { RANDOMIZE_WORD } from '../constants/ActionTypes';

export default function words(state = "", action) {
    switch (action.type) {
        case RANDOMIZE_WORD:
            return action.payload;
        default:
            return state;
    }
}


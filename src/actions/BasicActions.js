import { INCREMENT_COUNTER, DECREMENT_COUNTER, RANDOMIZE_WORD, GET_COMMENTS } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function changeWord() {
    const words = ['man','woman','banana','apple','żymła','jam','car','coche', 'bulanda','estrella'];
    return {
        type: RANDOMIZE_WORD,
        payload: words[Math.floor(Math.random()*10)]
    };
}

export function getData(promise) {
    return {
        type: GET_COMMENTS,
        payload: promise
    };
}
import { INCREMENT, DECREMENT } from '../actions';

const initState = { value: 0 };

export default (state = initState, action) => {
  switch(action.type) {
    case INCREMENT:
      return({ value: state.value + 1 });
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      break;
  }
};

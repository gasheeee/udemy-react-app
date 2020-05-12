export const INCREMENT = 'INCREMENT';
export const DECREMENT = "DECREMENT";

export const incrementFunc = () => {
  return { type: INCREMENT };
};

export const decrementFunc = () => {
  return { type: DECREMENT };
};

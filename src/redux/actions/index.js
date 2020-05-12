export const increment = 'INCREMENT';
export const decrement = "DECREMENT";

export const incrementFunc = () => {
  return { type: increment };
};

export const decrementFunc = () => {
  return { type: decrement };
};

import { compose, createStore, applyMiddleware } from "redux";

const INCREMENT = "INCREMENT";
const initialState = {
  count: 0,
};

const increment = () => ({ type: INCREMENT });

const reducer = (state = initialState, { type }) => {
  if (type === INCREMENT) {
    console.log("incrementing value");
    return { count: state.count + 1 };
  }
  return state;
};

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitorReducer = (state, action) => {
    const start = performance.now();

    const newState = reducer(state, action);

    const end = performance.now();

    const diff = end - start;
    console.log(diff);

    return newState;
  };

  return createStore(monitorReducer, initialState, enhancer);
};

const logEnhancer = (createStore) => (reducer, enhancer) => {
  const logReducer = (state, action) => {
    console.log({ before: state, action });
    const newState = reducer(state, action);
    console.log({ after: newState, action });
    return newState;
  };

  return createStore(logReducer, enhancer);
};

const logMiddleWare = (store) => (next) => (action) => {
  console.log("logMiddleware, old state: ", store.getState());
  next(action);
  console.log("logMiddleware, new state: ", store.getState());
};

const monitorMiddleware = (store) => (next) => (action) => {
  console.log("monitorMiddleware: ", action);
  const start = performance.now();
  next(action);
  const end = performance.now();
  console.log("time taken: ", end - start);
};

// const store = createStore(reducer, compose(logEnhancer, monitorEnhancer));
const store = createStore(
  reducer,
  applyMiddleware(logMiddleWare, monitorMiddleware)
);

store.dispatch(increment());
store.dispatch(increment());

console.log("store state: ", store.getState());

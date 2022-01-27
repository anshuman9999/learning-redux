import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

// const upperCase = (string) => string.toUpperCase();
// const threeTimes = (string) => string.repeat(3);

// const composedFunction = compose(upperCase, threeTimes);

// console.log(composedFunction("hello"));

const initialState = {
  value: 0,
};

const ACTIONS = {
  ADD: "ADD",
  INCREMENT: "INCREMENT",
};

const addAction = (amount) => ({ type: ACTIONS.ADD, payload: amount });
const incrementAction = () => ({ type: ACTIONS.INCREMENT });

const reducer = (state = initialState, { type, payload }) => {
  const { value } = state;
  if (type === ACTIONS.INCREMENT) return { value: value + 1 };
  if (type === ACTIONS.ADD) return { value: value + payload };

  return state;
};

const store = createStore(reducer);

const subscriber = () => console.log("from subscriber:", store.getState());
store.subscribe(subscriber);

// store.dispatch(incrementAction());
// store.dispatch(addAction(67));
// store.dispatch(incrementAction());

const boundActions = bindActionCreators(
  {
    increment: incrementAction,
    add: addAction,
  },
  store.dispatch
);

boundActions.increment();
boundActions.increment();
boundActions.add(67);

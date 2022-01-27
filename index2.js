import { combineReducers, createStore } from "redux";

const initialState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Eric" },
  ],
  tasks: [
    {
      title: "task 1",
    },
    {
      title: "task 2",
    },
  ],
};

const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  ADD_USER: "ADD_USER",
};

const userReducer = (state = initialState.users, { type, payload }) => {
  if (type === ACTIONS.ADD_USER) return [...state, payload];

  return state;
};
const taskReducer = (state = initialState.tasks, { type, payload }) => {
  if (type === ACTIONS.ADD_TASK) return [...state, payload];

  return state;
};

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const addTask = (title) => ({ type: ACTIONS.ADD_TASK, payload: { title } });
const addUser = (name) => ({ type: ACTIONS.ADD_USER, payload: { name } });

const store = createStore(reducer);

store.dispatch(addTask("title 3"));
store.dispatch(addUser("new user"));

console.log(store.getState());

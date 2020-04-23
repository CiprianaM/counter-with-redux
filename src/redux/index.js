import {createStore} from "redux";

export function increment () {
  return {
    type: "INCREMENT"
  }
}

export function decrement () {
  return {
    type: "DECREMENT"
  }
}

export function counterReducer (count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1
    case "DECREMENT":
      return count - 1
    default:
      return count;
  }
}

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState())
})
export default store;

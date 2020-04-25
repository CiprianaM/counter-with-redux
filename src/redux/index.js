import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

//in order to use thunk (and therefore async code), you need to:
//install and import library
//import applyMiddleware from redux
//create the store by passing applyMiddleware as a secondary argument, which gets called with thunk - applyMiddleware(thunk)
//return a function from your action creator. This returned function takes dispatch as an argument, and, if needed, getState

//asynchronous implementation of action creator, using thunk

export function increment () {
  return (dispatch, getState) => {
    const number = getState();
    const baseUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    fetch(`${baseUrl}/${number}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch({
          type: "INCREMENT",
          payload: res
        })
      })
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

const store = createStore(counterReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState())
})
export default store;



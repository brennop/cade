import { createStore } from "redux";

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error("Action not found");
  }
}

const store = createStore(reducer);
export default store;

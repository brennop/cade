import { createStore } from "redux";
import dfs from "./util/dfs";

const initialState = () => ({
  root: { name: "layer0", children: [], depth: 0 }
});

function reducer(state = initialState(), action) {
  switch (action.type) {
    case "ADD_LAYER":
      return {
        ...state,
        root: dfs(state.root, node => {
          if (node === action.node) {
            const children = [
              ...node.children,
              {
                name: "layer1",
                children: [],
                depth: action.node.depth + 1
              }
            ];
            return { ...node, children };
          }
          return node;
        })
      };
    default:
      // throw new Error("Action not found");
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

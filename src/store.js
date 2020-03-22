import { createStore } from "redux";
import { map, reduce } from "./util/dfs";
import getColor from "./util/color";

function ID() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

const initialState = () => ({
  root: {
    name: "Layer 0",
    children: [],
    depth: 0,
    color: getColor(),
    code: "",
    id: ID()
  },
  selected: null
});

function reducer(state = initialState(), action) {
  switch (action.type) {
    case "CHANGE_CODE":
      return {
        ...state,
        root: map(state.root, node => {
          if (node.id === state.selected.id) {
            node.code = action.code;
          }
          return node;
        }),
        selected: { ...state.selected, code: action.code }
      };
    case "SELECT_LAYER":
      return {
        ...state,
        selected: { id: action.id, code: action.code }
      };
    case "ADD_LAYER":
      return {
        ...state,
        root: map(state.root, node => {
          if (node === action.node) {
            const children = [
              ...node.children,
              {
                name: `Layer ${reduce(state.root, (_, acc) => acc + 1, 0)}`,
                children: [],
                depth: action.node.depth + 1,
                color: getColor(),
                id: ID()
              }
            ];
            return { ...node, children };
          }
          return node;
        })
      };
    case "REMOVE_LAYER":
      return {
        ...state,
        root: map(state.root, node => {
          return {
            ...node,
            children: node.children.filter(child => child !== action.node)
          };
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

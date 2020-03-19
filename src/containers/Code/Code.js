import React from "react";
import { Editor } from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Code = () => {
  const dispatch = useDispatch();
  const selected = useSelector(store => store.selected);

  return (
    <Editor
      disabled={!selected}
      value={selected?.code}
      onChange={ev => dispatch({ type: "CHANGE_CODE", code: ev.target.value })}
    />
  );
};

export default Code;

import React, { useState } from "react";
import Button from "../Button";
import {
  Wrapper,
  Main,
  Children,
  Buttons
} from "../../components/Layer/styles";
import { useDispatch, useSelector } from "react-redux";

const Layer = ({ node }) => {
  const dispatch = useDispatch();
  const selected = useSelector(store => store.selected);
  const [collapsed, setCollapsed] = useState(false);

  function addLayer(event) {
    event.stopPropagation();
    dispatch({ type: "ADD_LAYER", node });
  }

  function selectLayer(event) {
    event.stopPropagation();
    dispatch({ type: "SELECT_LAYER", id: node.id, code: node.code || "" });
  }

  function removeLayer(event) {
    event.stopPropagation();
    dispatch({ type: "REMOVE_LAYER", node });
  }

  return (
    <Wrapper onClick={selectLayer}>
      <Main color={node.color} selected={selected?.id === node.id}>
        {node.children.length !== 0 && (
          <Button
            size="20px"
            margin="0 2px"
            onClick={() => setCollapsed(c => !c)}
          >
            {collapsed ? ">" : "v"}
          </Button>
        )}
        <span>{node.name}</span>
        <Buttons>
          <Button size="20px" margin="0 2px" onClick={removeLayer}>
            -
          </Button>
          <Button size="20px" margin="0 2px" onClick={addLayer}>
            +
          </Button>
        </Buttons>
      </Main>
      {!collapsed && (
        <Children color={node.color}>
          {node.children && node.children.map(n => <Layer node={n} />)}
        </Children>
      )}
    </Wrapper>
  );
};

export default Layer;

import React from "react";
import Button from "../Button";
import { Wrapper, Main, Children } from "../../components/Layer/styles";
import { useDispatch, useSelector } from "react-redux";

const Layer = ({ node }) => {
  const dispatch = useDispatch();
  const selected = useSelector(store => store.selected);

  function addLayer(event) {
    event.stopPropagation();
    dispatch({ type: "ADD_LAYER", node });
  }

  function selectLayer(event) {
    event.stopPropagation();
    dispatch({ type: "SELECT_LAYER", id: node.id, code: node.code || "" });
  }

  return (
    <Wrapper onClick={selectLayer}>
      <Main color={node.color} selected={selected?.id === node.id}>
        <span>{node.name}</span>
        <Button size="20px" onClick={addLayer}>
          +
        </Button>
      </Main>
      <Children color={node.color}>
        {node.children && node.children.map(n => <Layer node={n} />)}
      </Children>
    </Wrapper>
  );
};

export default Layer;

import React from "react";
import Button from "../Button";
import { Wrapper, Main, Children } from "../../components/Layer/styles";
import { useDispatch } from "react-redux";

const Layer = ({ node }) => {
  const dispatch = useDispatch();

  function addLayer() {
    dispatch({ type: "ADD_LAYER", node });
  }

  return (
    <Wrapper>
      <Main color={node.color}>
        <span>{node.name}</span>
        <Button size="24px" onClick={addLayer}>
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

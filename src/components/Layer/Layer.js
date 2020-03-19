import React from "react";
import Button from "../Button";
import { Wrapper } from "../../components/Layer/styles";
import { useDispatch } from "react-redux";

const Layer = ({ node }) => {
  const dispatch = useDispatch();

  function addLayer() {
    dispatch({ type: "ADD_LAYER", node });
  }

  return (
    <>
      <Wrapper>
        <span>{node.name}</span>
        <Button size="24px" onClick={addLayer}>
          +
        </Button>
      </Wrapper>
      {node.children && node.children.map(n => <Layer node={n} />)}
    </>
  );
};

export default Layer;

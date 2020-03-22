import React from "react";
import { Wrapper } from "./styles";
import { useSelector } from "react-redux";
import Layer from "../../components/Layer";

const Layers = () => {
  const root = useSelector(store => store.root);

  return (
    <Wrapper>
      <Layer node={root} />
    </Wrapper>
  );
};

export default Layers;

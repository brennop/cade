import React, { useEffect } from "react";
import { Wrapper } from "./styles";
import Button from "../../components/Button";
import { useSelector } from "react-redux";
import Layer from "../../components/Layer";

const Layers = () => {
  const root = useSelector(store => store.root);

  return (
    <Wrapper>
      <Layer node={root} />
      <Button margin="0.8em">+</Button>
    </Wrapper>
  );
};

export default Layers;

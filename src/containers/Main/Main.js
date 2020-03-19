import React from "react";
import Object from "../../components/Object";
import { useSelector } from "react-redux";
import { Container } from "./styles";

const Main = () => {
  const root = useSelector(store => store.root);
  return (
    <Container>
      <Object node={root} />
    </Container>
  );
};

export default Main;

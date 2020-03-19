import React from "react";
import Layers from "./containers/Layers/";
import { Layout } from "./styles";
import Code from "./containers/Code/Code";

function App() {
  return (
    <Layout>
      <Layers />
      <div style={{ gridArea: "main" }} />
      <Code />
      <div style={{ gridArea: "props" }} />
    </Layout>
  );
}

export default App;

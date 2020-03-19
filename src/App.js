import React from "react";
import Layers from "./containers/Layers/";
import { Layout } from "./styles";
import Code from "./containers/Code/";
import Main from "./containers/Main/";

function App() {
  return (
    <Layout>
      <Layers />
      <Main />
      <Code />
      <div style={{ gridArea: "props" }} />
    </Layout>
  );
}

export default App;

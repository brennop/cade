import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  ${props => props.rules}
`;

const Object = ({ node }) => {
  return (
    <Container rules={node.code}>
      {node.children.map(child => (
        <Object node={child} />
      ))}
    </Container>
  );
};

export default Object;

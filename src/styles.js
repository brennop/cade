import styled from "@emotion/styled";

export const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "layers main code"
    "layers main props";
  grid-template-columns: 240px 1fr 240px;
`;

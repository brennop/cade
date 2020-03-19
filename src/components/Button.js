import styled from "@emotion/styled";

const Button = styled.button`
  border: none;
  padding: 0.1em;
  width: ${props => props.size || "32px"};
  height: ${props => props.size || "32px"};
  margin: ${props => props.margin || "0"};
`;

export default Button;

import styled from "@emotion/styled";

const Button = styled.button`
  border: none;
  padding: 0.1em;
  background-color: transparent;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => props.size || "32px"};
  height: ${props => props.size || "32px"};
  margin: ${props => props.margin || "0"};

  :hover {
    background-color: #b0b0b020;
  }
`;

export default Button;

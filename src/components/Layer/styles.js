import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Main = styled.div`
  width: 100%;
  padding: 0.4em;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 4px solid ${props => props.color};

  font-size: 12px;
  font-weight: 500;
  background-color: ${({ selected }) => (selected ? "#ededed" : "#fff")};
`;

export const Children = styled.div`
  padding-left: 16px;
  background-color: ${props => props.color};
`;

export const Buttons = styled.div`
  display: flex;
`;

import styled from "styled-components";

export const Container = styled.button`
  width: 42px;
  height: 42px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

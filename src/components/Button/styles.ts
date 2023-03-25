import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 12px;
  gap: 8px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

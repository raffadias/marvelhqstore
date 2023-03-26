import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 12px;
  gap: 8px;
  border: none;
  background-color: ${props => props.disabled ? props.theme.colors.greyLight : props.theme.colors.primary};
  border-radius: 4px;
  color: ${props => props.disabled ? props.theme.colors.black : props.theme.colors.white};
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  &:hover {
    transition: ease-in-out 300ms;
    background-color: ${props => props.disabled ? props.theme.colors.greyLight : props.theme.colors.secondaryLight};
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({theme}) => theme.colors.iceWhite};
`;

export const InputComponent = styled.input`
  height: 40px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.comicContainerBackground};
  border: 1px solid ${({theme}) => theme.colors.iceWhite};
  border-radius: 4px;
  color: ${({theme}) => theme.colors.iceWhite};
  padding: 5px;
`;

import styled from "styled-components";

export const Card = styled.div`
  height: 200px;
  width: 130px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.borderRadius};
`;

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 95vh;
  margin: 0 auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 16px 0;
  color: ${({theme}) => theme.colors.iceWhite};
`;

export const ComicsBackground = styled.div`
  margin: 20px auto;
  width: 95%;
  height: 90%;
  background-color: ${({theme}) => theme.colors.greyPrimary};
  border-radius: ${({theme}) => theme.borderRadius};
  gap: 8px;
  padding: 16px;
`;

export const ComicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: center;
`;

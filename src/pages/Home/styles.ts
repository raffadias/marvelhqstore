import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 95vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 16px auto;
  color: ${({theme}) => theme.colors.iceWhite};
`;

export const ComicsBackground = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 650px;
  background-color: ${({theme}) => theme.colors.comicContainerBackground};
  gap: 8px;
  padding: 16px;
  overflow-y: scroll;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e23636;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #c82222;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ComicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 50px;
  justify-items: center;
  margin-bottom: 100px;
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > h2 {
    color: ${({theme}) => theme.colors.iceWhite};
  }
`;

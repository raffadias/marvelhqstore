import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.comicContainerBackground};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  > img {
    height: 48px;
  }
`;

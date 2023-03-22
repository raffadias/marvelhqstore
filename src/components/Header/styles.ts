import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 16px auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.greyPrimary};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  > img {
    height: 48px;
  }
`;

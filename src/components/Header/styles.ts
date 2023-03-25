import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.comicContainerBackground};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  align-items: baseline;
  width: 54%;
  margin-left: auto;
  > img {
    height: 48px;
  }
`;

export const ComicsCart = styled(MdShoppingCart)`
  color: ${({theme}) => theme.colors.iceWhite};
  margin-right: 16px;
  cursor: pointer;

  &:hover {
    transition: ease-in-out 200ms;
    color: ${({theme}) => theme.colors.primary};
  }
`;

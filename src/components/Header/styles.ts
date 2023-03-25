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

export const CartItems = styled.span`
  position: absolute;
  top: 15px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.iceWhite};
  width: 20px;
  height: 20px;
  border-radius: 50%;
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

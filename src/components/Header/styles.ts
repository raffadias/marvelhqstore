import styled from "styled-components";
import { MdArrowBack, MdShoppingCart } from "react-icons/md";

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.comicContainerBackground};
`;

export const ArrowBackContainer = styled.div`
  width: 46%;
  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhone}) {
    width: auto;
  }
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
    cursor: pointer;
  }
  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakTablet}) {
    width: 56%;
  }

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhone}) {
    width: 58%;
  }

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhoneSm}) {
    width: 62%;
  }

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhoneXSm}) {
    width: 66%;
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

export const ArrowBack = styled(MdArrowBack)`
  color: ${({theme}) => theme.colors.iceWhite};
  margin-left: 16px;
  padding-top: 10px;
  cursor: pointer;

  &:hover {
    transition: ease-in-out 200ms;
    color: ${({theme}) => theme.colors.primary};
  }

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhone}) {
    margin-left: 6px;
  }
`;

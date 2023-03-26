import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 95vh;
  margin: 0 auto;
`;

export const CartBackground = styled.div`
  display: flex;
  margin: 20px auto;
  width: 100%;
  height: 90%;
  background-color: ${({theme}) => theme.colors.comicContainerBackground};
  gap: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakDesktop}) {
    flex-direction: column-reverse;
  }
`;

export const CartItemsContainer = styled.div`
  width: 50%;
  background-color: ${({theme}) => theme.colors.comicContainerBackground};
  overflow-y: scroll;

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

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakDesktop}) {
    width: 100%;
    height: 50%;
  }
`;

export const CartItem = styled.div`
  width: 100%;
  height: 120px;
  border: 2px solid ${({theme}) => theme.colors.greyLight};
  border-radius: 4px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const CartItemTitle = styled.h3`
  color: ${({theme}) => theme.colors.iceWhite};
  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhoneSm}) {
    display: none;
  }
`;

export const CartItemPrice = styled.h2`
  color: ${({theme}) => theme.colors.iceWhite};
  margin-right: 10px;
`;

export const CartItemImg = styled.img`
  height: 90px;
  width: 60px;
  padding: 5px;
  margin-left: 20px;
  border-radius: ${({theme}) => theme.borderRadius};
`;

export const RareComicBadge = styled.span`
  background-color: ${({theme}) => theme.colors.rareComicBadge};
  color: ${({theme}) => theme.colors.black};
  box-shadow: 1px 1px 0.5px 1px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 5px;
  margin-top: 10px ;
`;

export const ActionContainer = styled.div`
  margin-right: 24px;
`;

export const CheckoutContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  > h1, h2 {
    color: ${({theme}) => theme.colors.iceWhite};
  }
  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakDesktop}) {
    width: 100%;
    height: 50%;
  }
`;

export const CheckoutTitle = styled.h1`
  color: ${({theme}) => theme.colors.iceWhite};
  align-self: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 16px;
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({theme}) => theme.colors.iceWhite};
  > img {
    width: 400px;
    height: 500px;

    @media (max-width: ${({theme}) => theme.breakPoint.gridBreakDesktop}) {
      width: 200px;
      height: 300px;
    }
  }
`;

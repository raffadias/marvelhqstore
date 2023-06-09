import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 95vh;
  margin: 0 auto;
`;

export const ComicsBackground = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 90%;
  background-color: ${({theme}) => theme.colors.comicContainerBackground};
  gap: 8px;
  padding: 16px;
  overflow-y: scroll;
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

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhone}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ComicImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 300px;
    height: 450px;
    border-radius: 2px;

    @media (max-width: ${({theme}) => theme.breakPoint.gridBreakTablet}) {
      width: 200px;
      height: 300px;
    }

    @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhone}) {
      width: 160px;
      height: 250px;
    }
  }
  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhone}) {
      height: auto;
  }
`;

export const RareComicBadge = styled.span`
  position: relative;
  top: -200px;
  left: 45px;
  background-color: ${({theme}) => theme.colors.rareComicBadge};
  color: ${({theme}) => theme.colors.black};
  box-shadow: 1px 1px 0.5px 1px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 5px;
  margin-top: 10px;

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakTablet}) {
    top: -130px;
  }

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhone}) {
    top: -100px;
  }
`;

export const ComicInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px 0;

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakDesktop}) {
    margin: 50px 0;
  }

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakTabletMd}) {
    margin: 120px 0;
  }

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhone}) {
    width: 80%;
    margin: 0px 0px;
  }
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.iceWhite};
  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhoneSm}) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  color: ${({theme}) => theme.colors.iceWhite};
  line-height: 1.5rem;
  margin-top: 25px;
  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakTabletMd}) {
    display: none;
  }
`;

export const Price = styled.span`
  color: ${({theme}) => theme.colors.iceWhite};
  background-color: ${({theme}) => theme.colors.primary};
  font-size: 42px;
  padding: 2px;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 25px;

  @media (max-width: ${({theme}) => theme.breakPoint.gridBreakPhoneSm}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const BuyComicText = styled.p`
  font-size: 24px;
`;



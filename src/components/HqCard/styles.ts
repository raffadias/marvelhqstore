import styled from "styled-components";

export const Card = styled.div`
  height: 200px;
  width: 130px;
  border-radius: ${({theme}) => theme.borderRadius};
  perspective: 1000px;
  cursor: pointer;
`;

export const ComicImage = styled.img`
  height: 200px;
  border-radius: ${({theme}) => theme.borderRadius};
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: ${({theme}) => theme.borderRadius};
`;

type CardBackProps = {
  bgImg: string;
}

export const CardBack = styled.div<CardBackProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: url(${({bgImg}) => bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${({theme}) => theme.borderRadius};
  transform: rotateY(180deg);
`;

export const FlipCard = styled.div`
  &:hover ${InnerContainer} {
    transform: rotateY(180deg);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
  height: 70%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-self: flex-end;
  justify-content: end;
  background-image: linear-gradient(to top, ${({theme}) => theme.colors.black}, transparent);
  border-radius: ${({theme}) => theme.borderRadius};
`;

export const RareComicBadge = styled.span`
  position: absolute;
  top: 0;
  left: 5px;
  background-color: ${({theme}) => theme.colors.rareComicBadge};
  color: ${({theme}) => theme.colors.black};
  box-shadow: 1px 1px 0.5px 1px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 5px;
  margin-top: 10px;
`;

export const Title = styled.p`
  position: absolute;
  width: 100%;
  padding: 5px;
  color: ${({theme}) => theme.colors.iceWhite};
  background-image: linear-gradient(to top, ${({theme}) => theme.colors.black}, transparent);
  border-radius: ${({theme}) => theme.borderRadius};
`;

export const Price = styled.span`
  position: absolute;
  width: 100%;
  font-size: 24px;
  color: ${({theme}) => theme.colors.iceWhite};
  background-image: linear-gradient(to top, ${({theme}) => theme.colors.black}, transparent);
  border-radius: ${({theme}) => theme.borderRadius};
`;

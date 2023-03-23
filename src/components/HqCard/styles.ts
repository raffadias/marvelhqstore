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

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: ${({theme}) => theme.colors.secondaryDark};
  border-radius: ${({theme}) => theme.borderRadius};
  transform: rotateY(180deg);
`;

export const FlipCard = styled.div`
  &:hover ${InnerContainer} {
    transform: rotateY(180deg);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: end;
  background-image: linear-gradient(to top, #000, transparent);
  border-radius: ${({theme}) => theme.borderRadius};
`;

export const Title = styled.p`
  position: absolute;
  width: 100%;
  padding: 5px;
  color: ${({theme}) => theme.colors.iceWhite};
  background-image: linear-gradient(to top, #000, transparent);
  border-radius: ${({theme}) => theme.borderRadius};
`;

export const Price = styled.span`
  position: absolute;
  width: 100%;
  font-size: 24px;
  color: ${({theme}) => theme.colors.iceWhite};
  background-image: linear-gradient(to top, #000, transparent);
  border-radius: ${({theme}) => theme.borderRadius};
`;

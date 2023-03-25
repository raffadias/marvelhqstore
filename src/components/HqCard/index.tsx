import { useContext, useEffect, useState } from "react";
import { Comic } from "@/types/Comic";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button } from "../Button";
import { MdAddShoppingCart, MdCheckCircle } from "react-icons/md";
import { Card, Title, InnerContainer, FlipCard, CardFront, CardBack, ComicImage, InfoContainer, Price, ButtonContainer, RareComicBadge } from "./styles";
import { ComicsCartContext } from "@/context/ComicsCartContext";
import { useNavigate } from "react-router-dom";

export function HqCard(comic: Comic) {
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const { addComicToCart, cartItems } = useContext(ComicsCartContext);
  const navigate = useNavigate();

  const img = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  const [price] = comic.prices;
  const isRareComic = price.price > 20;

  function addComic() {
    addComicToCart(comic);
    setDisableButton(true);
  }

  useEffect(() => {
    if (cartItems.find((cartItem) => cartItem.id === comic.id)) {
      setDisableButton(true);
    }
  },[comic]);

  return (
    <FlipCard>
      <Card onClick={() => navigate(`/comic/${comic.id}`)}>
        <InnerContainer>
          <CardFront>
            {isRareComic && (
              <RareComicBadge>Rare</RareComicBadge>
            )}
            <ComicImage src={img} alt="Imagem da HQ" />
            <Price>
              {formatCurrency(price.price > 0 ? (price.price) : (2.99))}
            </Price>
          </CardFront>
          <CardBack bgImg={img}>
            <InfoContainer>
              <Title>{comic.title}</Title>
            </InfoContainer>
          </CardBack>
        </InnerContainer>
      </Card>
      <ButtonContainer>
        <Button clickFunc={() => addComic()} disabled={disableButton}>
          {disableButton ? (
            <MdCheckCircle size={24} />
          ) : (
            <MdAddShoppingCart size={24} />
          )}
        </Button>
      </ButtonContainer>
    </FlipCard>
  );
}

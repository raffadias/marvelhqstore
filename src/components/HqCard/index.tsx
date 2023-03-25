import { useContext } from "react";
import { Comic } from "@/types/Comic";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button } from "../Button";
import { MdAddShoppingCart } from "react-icons/md";
import { Card, Title, InnerContainer, FlipCard, CardFront, CardBack, ComicImage, InfoContainer, Price, ButtonContainer, RareComicBadge } from "./styles";
import { ComicsCartContext } from "@/context/ComicsCartContext";

export function HqCard(comic: Comic) {

  const { addComicToCart } = useContext(ComicsCartContext);

  const img = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  const [price] = comic.prices;
  const isRareComic = price.price > 20;

  return (
    <FlipCard>
      <Card>
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
          <CardBack>
            <ButtonContainer>
              <Button clickFunc={() => addComicToCart(comic)}>
                  Add to cart
                <MdAddShoppingCart size={24} />
              </Button>
            </ButtonContainer>
            <InfoContainer>
              <Title>{comic.title}</Title>
            </InfoContainer>
          </CardBack>
        </InnerContainer>
      </Card>
    </FlipCard>
  );
}

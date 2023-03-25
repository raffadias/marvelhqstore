import { Comic } from "@/types/Comic";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button } from "../Button";
import { MdAddShoppingCart } from "react-icons/md";
import { Card, Title, InnerContainer, FlipCard, CardFront, CardBack, ComicImage, InfoContainer, Price, ButtonContainer } from "./styles";

export function HqCard({id, title, digitalId, description, thumbnail, prices}: Comic) {
  const img = `${thumbnail.path}.${thumbnail.extension}`;
  const [price] = prices;
  return (
    <FlipCard>
      <Card>
        <InnerContainer>
          <CardFront>
            <ComicImage src={img} alt="Imagem da HQ" />
            <Price>
              {formatCurrency(price.price > 0 ? (price.price) : (2.99))}
            </Price>
          </CardFront>
          <CardBack>
            <ButtonContainer>
              <Button clickFunc={() => console.log("add to cart")}>
                  Add to cart
                <MdAddShoppingCart size={24} />
              </Button>
            </ButtonContainer>
            <InfoContainer>
              <Title>{title}</Title>
            </InfoContainer>
          </CardBack>
        </InnerContainer>
      </Card>
    </FlipCard>
  );
}

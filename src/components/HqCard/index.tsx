import { Comic } from "../../types/Comic";
import { formatCurrency } from "../../utils/formatCurrency";
import { Card, Title, InnerContainer, FlipCard, CardFront, CardBack, ComicImage, InfoContainer, Price } from "./styles";

export function HqCard({id, title, digitalId, description, thumbnail, prices}: Comic) {
  const img = `${thumbnail.path}.${thumbnail.extension}`;
  const [price] = prices;
  return (
    <FlipCard>
      <Card>
        <InnerContainer>
          <CardFront>
            <ComicImage src={img} alt="Imagem da HQ" />
            <Title>{title}</Title>
          </CardFront>
          <CardBack>
            <InfoContainer>
              <Price>
                {formatCurrency(price.price > 0 ? (price.price) : (2.99))}
              </Price>
            </InfoContainer>
          </CardBack>
        </InnerContainer>
      </Card>
    </FlipCard>
  );
}

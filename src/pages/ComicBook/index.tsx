import { useState, useEffect, useContext } from "react";
import { Header } from "@/components/Header";
import { ButtonContainer, BuyComicText, ComicImageContainer, ComicInfoContainer, ComicsBackground, Container, ContentContainer, Description, Price, RareComicBadge, Title } from "./styles";
import { Comic } from "@/types/Comic";
import { useParams } from "react-router-dom";
import { getComicBookById } from "@/services/comics";
import { toast } from "react-toastify";
import { Loading } from "@/components/Loading";
import { formatCurrency } from "@/utils/formatCurrency";
import { Button } from "@/components/Button";
import { MdAddShoppingCart, MdCheckCircle } from "react-icons/md";
import { ComicsCartContext } from "@/context/ComicsCartContext";

export function ComicBook() {
  const [loading, setLoading] = useState<boolean>(false);
  const [comic, setComic] = useState<Comic>();
  const [rareComic, setRareComic] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const { id } = useParams();
  const { addComicToCart, cartItems } = useContext(ComicsCartContext);

  async function getComic(comicId: number) {
    try {
      setLoading(true);
      const { data } = await getComicBookById(comicId);
      setComic(data.data.results[0]);
      data.data.results[0].prices[0].price > 20 && setRareComic(true);
    } catch (error) {
      toast.error("Internal server error", {position: "top-center"});
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getComic(Number(id));
  },[id]);

  function addComic(comic: Comic) {
    addComicToCart(comic);
    setDisableButton(true);
  }

  useEffect(() => {
    if (cartItems.find((cartItem) => cartItem.id === comic?.id)) {
      setDisableButton(true);
    }
  },[comic]);

  return (
    <Container>
      <Header />
      <ComicsBackground>
        {loading && <Loading />}
        {comic && (
          <ContentContainer>
            <ComicImageContainer>
              {rareComic && <RareComicBadge>Rare</RareComicBadge>}
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt="Comic image"
              />
            </ComicImageContainer>
            <ComicInfoContainer>
              <Title>{comic.title}</Title>
              <Description>
                {comic.description !== ""
                  ? comic.description
                  : comic.textObjects[0].text}
              </Description>
              <ButtonContainer>
                <Price>
                  {formatCurrency(
                    comic.prices[0].price > 0 ? comic.prices[0].price : 2.99
                  )}
                </Price>
                <Button
                  clickFunc={() => addComic(comic)}
                  disabled={disableButton}
                >
                  {disableButton ? (
                    <MdCheckCircle size={24} />
                  ) : (
                    <MdAddShoppingCart size={24} />
                  )}
                  <BuyComicText>
                    {disableButton ? "Comic added to cart" : "Buy comic"}
                  </BuyComicText>
                </Button>
              </ButtonContainer>
            </ComicInfoContainer>
          </ContentContainer>
        )}
      </ComicsBackground>
    </Container>
  );
}

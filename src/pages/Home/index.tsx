import { useEffect, useState, useRef } from "react";
import { Header } from "@/components/Header";
import { HqCard } from "@/components/HqCard";
import { Loading } from "@/components/Loading";
import { getComicBooks } from "@/services/comics";
import { Comic } from "@/types/Comic";
import { ButtonsContainer, ComicsBackground, ComicsContainer, Container, Footer, Title } from "./styles";
import { Button } from "@/components/Button";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { toast } from "react-toastify";

export function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function getComics(limit: number, offset: number) {
    try {
      setLoading(true);
      const { data } = await getComicBooks(limit, offset);
      setComics(data.data.results);
    } catch (error) {
      toast.error("Internal server error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getComics(limit, offset);
  },[limit, offset]);

  function resetLimit() {
    setLimit(20);
  }

  function increaseLimit() {
    setLimit(prevState => prevState + 10);
  }

  function prevPage() {
    setOffset(prevState => prevState === 0 ? prevState : prevState - limit);
  }

  function nextPage() {
    setOffset(prevState => prevState + limit);
  }

  return (
    <Container>
      <Header />
      <ComicsBackground ref={scrollRef}>
        <Title>Comics</Title>
        <ComicsContainer id="comics-container">
          {comics.map((comic) => (
            <HqCard
              textObjects={comic.textObjects}
              key={comic.id}
              digitalId={comic.digitalId}
              id={comic.id}
              title={comic.title}
              description={comic.description}
              thumbnail={comic.thumbnail}
              prices={comic.prices}
            />
          ))}
        </ComicsContainer>
        {loading && (
          <Loading />
        )}
        {!loading && (
          <Footer>
            {comics.length < 100 && (
              <ButtonsContainer>
                <Button clickFunc={() => increaseLimit()}>
                Load more
                </Button>
                {limit > 20 && (
                  <Button clickFunc={() => resetLimit()}>
                  Reset limit
                  </Button>
                )}
              </ButtonsContainer>
            )}
            <ButtonsContainer>
              <Button clickFunc={() => prevPage()}>
                <MdArrowBack />
              Prev
              </Button>
              <Button clickFunc={() => nextPage()}>
              Next
                <MdArrowForward />
              </Button>
            </ButtonsContainer>
          </Footer>
        )}
      </ComicsBackground>
    </Container>
  );
}

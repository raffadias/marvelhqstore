import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HqCard } from "@/components/HqCard";
import { Loading } from "@/components/Loading";
import { getComicBooks } from "@/services/comics";
import { Comic } from "@/types/Comic";
import { ComicsBackground, ComicsContainer, Container, Footer, Title } from "./styles";

export function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);


  async function getComics(offset: number) {
    try {
      setLoading(true);
      const { data } = await getComicBooks(offset);
      setComics(data.data.results);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getComics(offset);
  },[offset]);

  function prevPage() {
    setOffset(prevState => prevState === 0 ? prevState : prevState - 20);
  }

  function nextPage() {
    setOffset(prevState => prevState + 20);
  }

  return (
    <Container>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <ComicsBackground>
          <Title>Comics</Title>
          <ComicsContainer>
            {comics.map((comic) => (
              <HqCard
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
          <Footer>
            <button onClick={() => prevPage()}>PREV</button>
            <button onClick={() => nextPage()}>NEXT</button>
          </Footer>
        </ComicsBackground>
      )}
    </Container>
  );
}

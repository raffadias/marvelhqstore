import { useEffect, useState, useRef } from "react";
import { Header } from "@/components/Header";
import { HqCard } from "@/components/HqCard";
import { Loading } from "@/components/Loading";
import { getComicBooks } from "@/services/comics";
import { Comic } from "@/types/Comic";
import { ComicsBackground, ComicsContainer, Container, Footer, Title } from "./styles";

export function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [limit, setLimit] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  async function getComics(limit: number) {
    try {
      setLoading(true);
      const { data } = await getComicBooks(limit);
      setComics(data.data.results);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getComics(limit);
  },[limit]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      const scrollPosition = scrollElement.scrollTop + scrollElement.clientHeight;
      const bodyHeight = scrollElement.scrollHeight;

      if (scrollPosition >= bodyHeight && comics.length < 99) {
        nextPage();
      }
    };

    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    scrollElement.addEventListener("scroll", handleScroll);

    return () => scrollElement.removeEventListener("scroll", handleScroll);
  },[comics]);

  // function prevPage() {
  //   setLimit(prevState => prevState === 0 ? prevState : prevState - 20);
  // }

  function nextPage() {
    setLimit(prevState => prevState + 20);
  }

  return (
    <Container>
      <Header />
      <ComicsBackground ref={scrollRef}>
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
        {loading && (
          <Loading />
        )}
        <Footer>
          <h2>End of comics list.</h2>
        </Footer>
      </ComicsBackground>
    </Container>
  );
}

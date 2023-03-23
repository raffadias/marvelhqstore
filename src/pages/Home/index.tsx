import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { HqCard } from "../../components/HqCard";
import { Loading } from "../../components/Loading";
import { getComicBooks } from "../../services/comics";
import { Comic } from "../../types/Comic";
import { ComicsBackground, ComicsContainer, Container, LoadingContainer, Title } from "./styles";

export function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function getComics() {
    getComicBooks()
      .then(({data}) => {
        setLoading(true);
        setComics(data.data.results);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getComics();
  },[]);

  return (
    <Container>
      <Header />
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <ComicsBackground>
          <Title>Comics</Title>
          <ComicsContainer>
            {comics.map((comic) => {
              return (
                <HqCard key={comic.id} digitalId={comic.digitalId} id={comic.id} title={comic.title} description={comic.description} thumbnail={comic.thumbnail} prices={comic.prices} />
              );})}
          </ComicsContainer>
        </ComicsBackground>
      )}
    </Container>
  );
}

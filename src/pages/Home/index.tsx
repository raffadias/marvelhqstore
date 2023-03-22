import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { getComicBooks } from "../../services/comics";
import { Comic } from "../../types/Comic";
import { ComicsContainer, Container, LoadingContainer } from "./styles";

export function Home() {
  const [comics, setComics] = useState<Comic>();
  const [loading, setLoading] = useState<boolean>(false);

  async function getComics() {
    try {
      setLoading(true);
      const { data } = await getComicBooks();
      setComics(data.results);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
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
        <ComicsContainer>

        </ComicsContainer>
      )}
    </Container>
  );
}

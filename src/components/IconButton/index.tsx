import { Container } from "./styles";

type IconButtonProps = {
  children: React.ReactNode;
  clickFunc: () => void;
  id: string;
}

export function IconButton({children, clickFunc, id }: IconButtonProps) {
  return (
    <Container onClick={clickFunc} id={id}>
      {children}
    </Container>
  );
}

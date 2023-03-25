import { Container } from "./styles";

type IconButtonProps = {
  children: React.ReactNode;
  clickFunc: () => void;
}

export function IconButton({children, clickFunc }: IconButtonProps) {
  return (
    <Container onClick={clickFunc}>
      {children}
    </Container>
  );
}

import { Container } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  clickFunc: () => void;
}

export function Button({children, clickFunc}: ButtonProps) {
  return (
    <Container onClick={clickFunc}>
      {children}
    </Container>
  );
}

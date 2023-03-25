import { Container } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  clickFunc: () => void;
}

export function Button({children, clickFunc, disabled}: ButtonProps) {
  return (
    <Container onClick={clickFunc} disabled={disabled}>
      {children}
    </Container>
  );
}

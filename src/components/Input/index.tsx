import { Container, InputComponent, Label } from "./styles";

type InputProps = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function Input({label, value, setValue}: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputComponent value={value} onChange={(e) => setValue(e.target.value)} />
    </Container>
  );
}

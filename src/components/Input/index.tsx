import { Container, InputComponent, Label } from "./styles";

type InputProps = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}

export function Input({label, value, setValue, id}: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputComponent id={id} value={value} onChange={(e) => setValue(e.target.value)} />
    </Container>
  );
}

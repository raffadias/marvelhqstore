import { LoadingContainer, Spinner } from "./styles";
interface LoadingProps {
  size?: number;
}

export function Loading({size}: LoadingProps) {
  return (
    <LoadingContainer>
      <Spinner size={size} />
    </LoadingContainer>
  );
}

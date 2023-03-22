import { Spinner } from "./styles";
interface LoadingProps {
  size?: number;
}

export function Loading({size}: LoadingProps) {
  return (
    <Spinner size={size} />
  );
}

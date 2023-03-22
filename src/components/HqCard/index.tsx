import { Comic } from "../../types/Comic";
import { Card } from "./styles";

export function HqCard({id, title, digitalId, description, thumbnail, price}: Comic) {
  return (
    <Card>
      <p>{title}</p>
    </Card>
  );
}

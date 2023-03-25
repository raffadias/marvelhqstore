import { LogoContainer, Header as HeaderComponent, ComicsCart } from "./styles";
import marvelLogo from "@/assets/marvelLogo.svg";

export function Header() {
  return (
    <HeaderComponent>
      <LogoContainer>
        <img src={marvelLogo} alt="Logo marvel" />
        <ComicsCart size={42} />
      </LogoContainer>
    </HeaderComponent>
  );
}

import { LogoContainer, Header as HeaderComponent } from "./styles";
import marvelLogo from "../../assets/marvelLogo.svg";

export function Header() {
  return (
    <HeaderComponent>
      <LogoContainer>
        <img src={marvelLogo} alt="Logo marvel" />
      </LogoContainer>
    </HeaderComponent>
  );
}

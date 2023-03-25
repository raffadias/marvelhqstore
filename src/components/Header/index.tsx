import { useContext } from "react";
import { LogoContainer, Header as HeaderComponent, ComicsCart, CartItems } from "./styles";
import marvelLogo from "@/assets/marvelLogo.svg";
import { ComicsCartContext } from "@/context/ComicsCartContext";

export function Header() {
  const { cartItems } = useContext(ComicsCartContext);
  return (
    <HeaderComponent>
      <LogoContainer>
        <img src={marvelLogo} alt="Logo marvel" />
        <ComicsCart size={42} />
        <CartItems>{cartItems.length}</CartItems>
      </LogoContainer>
    </HeaderComponent>
  );
}

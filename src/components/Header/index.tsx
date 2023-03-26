import { useContext } from "react";
import { LogoContainer, Header as HeaderComponent, ComicsCart, CartItems, ArrowBackContainer, ArrowBack } from "./styles";
import marvelLogo from "@/assets/marvelLogo.svg";
import { ComicsCartContext } from "@/context/ComicsCartContext";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const { cartItems } = useContext(ComicsCartContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <HeaderComponent>
      {pathname !== "/" && (
        <ArrowBackContainer>
          <ArrowBack size={42} onClick={() => navigate(-1)} />
        </ArrowBackContainer>
      )}
      <LogoContainer>
        <img src={marvelLogo} alt="Logo marvel" onClick={() => navigate("/")} />
        <ComicsCart size={42} onClick={() => navigate("/cart")} id="cart" />
        <CartItems>{cartItems.length}</CartItems>
      </LogoContainer>
    </HeaderComponent>
  );
}

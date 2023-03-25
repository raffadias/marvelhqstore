import { useContext } from "react";
import { LogoContainer, Header as HeaderComponent, ComicsCart, CartItems, ArrowBackContainer, ArrowBack } from "./styles";
import marvelLogo from "@/assets/marvelLogo.svg";
import { ComicsCartContext } from "@/context/ComicsCartContext";
import { useNavigate, useParams } from "react-router-dom";

export function Header() {
  const { cartItems } = useContext(ComicsCartContext);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <HeaderComponent>
      {params.id && (
        <ArrowBackContainer>
          <ArrowBack size={42} onClick={() => navigate(-1)} />
        </ArrowBackContainer>
      )}
      <LogoContainer>
        <img src={marvelLogo} alt="Logo marvel" onClick={() => navigate("/")} />
        <ComicsCart size={42} />
        <CartItems>{cartItems.length}</CartItems>
      </LogoContainer>
    </HeaderComponent>
  );
}

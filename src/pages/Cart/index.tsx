import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/IconButton";
import { ComicsCartContext } from "@/context/ComicsCartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { useContext } from "react";
import { MdCheck, MdRemoveCircle, MdShoppingCart } from "react-icons/md";
import readingComicImg from "@/assets/readingComic.svg";
import {
  ActionContainer,
  CartBackground,
  CartItem,
  CartItemImg,
  CartItemPrice,
  CartItemsContainer,
  CartItemTitle,
  CheckoutContainer,
  CheckoutTitle,
  Container,
  EmptyCartContainer,
  InfoContainer,
  InputContainer,
  RareComicBadge,
  TotalContainer,
} from "./styles";
import { Input } from "@/components/Input";
import { toast } from "react-toastify";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function Cart() {
  const { cartItems, removeComicFromCart, setCartItems } = useContext(ComicsCartContext);
  const navigate = useNavigate();


  const [couponText, setCouponText] = useLocalStorage<string>("couponValue", "");
  const [discountRareApplied, setDiscountRareApplied] = useLocalStorage<boolean>("discountRareApplied", false);
  const [discountCommonApplied, setDiscountCommonApplied] = useLocalStorage<boolean>("discountCommonApplied", false);

  function discountPrice(price: number, isComicRare: boolean) {
    if (!isComicRare && discountCommonApplied) {
      price = price - 1;
    }

    if (isComicRare && discountRareApplied) {
      price = price - 5;
    }

    return price;
  }

  const initialTotal = cartItems.reduce((acc, cartItem) => {
    const isComicRare = cartItem.prices[0].price > 20;
    let price: number = cartItem.prices[0].price > 0 ? cartItem.prices[0].price : 2.99;

    price = discountPrice(price, isComicRare);
    return acc + price;
  },0);

  const [totalPrice, setTotalPrice] = useState<number>(initialTotal);

  function applyDiscount(value: string) {
    const discountRare = "marvelrare";
    const discountCommon = "marvelcommon";

    if (value === discountCommon) {
      toast.success("Discount applied on common comics.");
    } else if (value === discountRare) {
      toast.success("Discount applied on rare comics.");
    } else {
      toast.error("Invalid coupoun.");
    }

    const total = cartItems.reduce((acc, cartItem) => {
      const isComicRare = cartItem.prices[0].price > 20;
      let price: number = cartItem.prices[0].price > 0 ? cartItem.prices[0].price : 2.99;

      if ((!isComicRare && value === discountCommon) || (!isComicRare && discountCommonApplied)) {
        setDiscountCommonApplied(true);
        price = price - 1;
      }

      if ((isComicRare && value === discountRare) || (isComicRare && discountRareApplied)) {
        setDiscountRareApplied(true);
        price = price - 5;
      }
      return acc + price;
    },0);
    setTotalPrice(total);
  }

  function checkout() {
    setCartItems([]);
    localStorage.clear();
    navigate("/");
    alert("Checkout");
  }

  useEffect(() => {
    const discountRare = "marvelrare";
    const discountCommon = "marvelcommon";
    const value = couponText.toLowerCase();

    const total = cartItems.reduce((acc, cartItem) => {
      const isComicRare = cartItem.prices[0].price > 20;
      let price: number = cartItem.prices[0].price > 0 ? cartItem.prices[0].price : 2.99;

      if ((!isComicRare && value === discountCommon) || (!isComicRare && discountCommonApplied)) {
        price = price - 1;
      }

      if ((isComicRare && value === discountRare) || (isComicRare && discountRareApplied)) {
        price = price - 5;
      }
      return acc + price;
    },0);
    setTotalPrice(total);
  },[cartItems]);

  return (
    <Container>
      <Header />
      <CartBackground>
        <CartItemsContainer id="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => {
              const isComicRare = cartItem.prices[0].price > 20;
              let price: number = cartItem.prices[0].price > 0 ? cartItem.prices[0].price : 2.99;
              price = discountPrice(price, isComicRare);
              return (
                <CartItem key={cartItem.id}>
                  <InfoContainer>
                    <CartItemImg src={`${cartItem.thumbnail.path}.${cartItem.thumbnail.extension}`} alt="HQ Cover" />
                    {isComicRare && (
                      <RareComicBadge>
                        Rare
                      </RareComicBadge>
                    )}
                    <CartItemTitle>{cartItem.title}</CartItemTitle>
                    <CartItemPrice>{formatCurrency(price)}</CartItemPrice>
                  </InfoContainer>
                  <ActionContainer>
                    <IconButton clickFunc={() => removeComicFromCart(cartItem)} id="remove-comic">
                      <MdRemoveCircle size={24} />
                    </IconButton>
                  </ActionContainer>
                </CartItem>
              );
            })
          ) : (
            <EmptyCartContainer>
              <img src={readingComicImg} alt="Cart empty image" />
              Cart empty.
            </EmptyCartContainer>
          )}
        </CartItemsContainer>
        <CheckoutContainer>
          <CheckoutTitle>Checkout</CheckoutTitle>
          <InputContainer>
            <Input id="coupon-input" label="Discount coupon" value={couponText} setValue={setCouponText} />
          </InputContainer>
          <Button clickFunc={() => applyDiscount(couponText.toLowerCase())} disabled={discountCommonApplied && discountRareApplied}>
            Apply discount coupon
            <MdCheck size={24} />
          </Button>
          <TotalContainer>
            <h2 id="total">Total ({cartItems.length} items): {formatCurrency(totalPrice)}</h2>
          </TotalContainer>
          <Button clickFunc={() => checkout()}>
            Checkout
            <MdShoppingCart size={24} />
          </Button>
        </CheckoutContainer>
      </CartBackground>
    </Container>
  );
}

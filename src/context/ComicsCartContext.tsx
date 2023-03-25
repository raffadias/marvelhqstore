import { Comic } from "@/types/Comic";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

type ComicsCartContextType = {
  cartItems: Comic[];
  setCartItems: React.Dispatch<React.SetStateAction<Comic[]>>;
  addComicToCart: (comic: Comic) => void;
}

const ComicsCartContext = createContext<ComicsCartContextType>({
  cartItems: [],
  setCartItems: () => {},
  addComicToCart: () => {}
});

function ComicsCartProvider({children} : {children: JSX.Element}) {

  const [cartItems, setCartItems] = useState<Comic[]>([]);

  function addComicToCart(comic: Comic) {
    const exists = cartItems.some((c) => c.id === comic.id);
    if (exists) {
      toast.error("This comic is already in the cart!", {  position: "bottom-left"});
      return;
    }
    setCartItems(prevCartItems => [...prevCartItems, comic]);
    toast.success("Comic added to cart!", {  position: "bottom-left"});
  }


  const value = {
    cartItems,
    setCartItems,
    addComicToCart
  };

  return (
    <ComicsCartContext.Provider value={value}>
      {children}
    </ComicsCartContext.Provider>
  );
}

export { ComicsCartContext, ComicsCartProvider };

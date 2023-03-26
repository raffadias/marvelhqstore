import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Comic } from "@/types/Comic";
import { createContext } from "react";
import { toast } from "react-toastify";

type ComicsCartContextType = {
  cartItems: Comic[];
  setCartItems: React.Dispatch<React.SetStateAction<Comic[]>>;
  addComicToCart: (comic: Comic) => void;
  removeComicFromCart: (comic: Comic) => void;
}

const ComicsCartContext = createContext<ComicsCartContextType>({
  cartItems: [],
  setCartItems: () => {},
  addComicToCart: () => {},
  removeComicFromCart: () => {},
});

function ComicsCartProvider({children} : {children: JSX.Element}) {

  const [cartItems, setCartItems] = useLocalStorage<Comic[]>("cartItems", []);

  function addComicToCart(comic: Comic) {
    const exists = cartItems.some((c) => c.id === comic.id);
    if (exists) {
      toast.error("This comic is already in the cart!", {position: "bottom-left"});
      return;
    }
    setCartItems(prevCartItems => [...prevCartItems, comic]);
    toast.success("Comic added to cart!", {position: "bottom-left"});
  }

  function removeComicFromCart(comic: Comic) {
    const newCartItems = cartItems.filter(cartItem => cartItem.id !== comic.id);
    setCartItems(newCartItems);
  }


  const value = {
    cartItems,
    setCartItems,
    addComicToCart,
    removeComicFromCart
  };

  return (
    <ComicsCartContext.Provider value={value}>
      {children}
    </ComicsCartContext.Provider>
  );
}

export { ComicsCartContext, ComicsCartProvider };

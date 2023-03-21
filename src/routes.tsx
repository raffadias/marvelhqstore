import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { ComicBook } from "./pages/ComicBook";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />}/>
        <Route path="/comic/:id" element={<ComicBook />}/>
        <Route path="/cart" element={<Cart />}/>
      </ReactRoutes>
    </BrowserRouter>
  );
}

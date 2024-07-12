
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import CheckOut from "./pages/checkout";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div className="w-full h-auto min-h-screen">
      <ShopContextProvider>
        
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
         
        </ShopContextProvider>
      
    </div>
  );
}

export default App;

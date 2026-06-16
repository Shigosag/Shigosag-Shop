import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartDrawer from "./components/CartDrawer";
import { ThemeProvider } from "./theme/ThemeContext";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ThemeProvider>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <Home />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </ThemeProvider>
  );
}
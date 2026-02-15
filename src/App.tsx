import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/templates/Layout";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import ShoppingCart from "./pages/ShoppingCart";
import BreadcrumbsLayout from "./components/templates/BreadcrumbsLayout";
import CategoriesProducts from "./pages/CategoriesProducts";
import ProductDetail from "./pages/ProductDetail";
import { GlobalStyle } from "./styles/GlobalStyle";
import { createContext, useState } from "react";
import { CartProvider } from "./context/CartContext";
import LikedProductsProvider from "./context/LikeProductsContext";
import LikedProducts from "./pages/LikedProducts";
import CheckboxProvider from "./context/CheckboxContext";
import NotFound from "./pages/NotFound";

export type ThemeContext = {
  toggle: () => void;
  isDark: boolean;
};

export const ThemeContext = createContext({} as ThemeContext);

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      <ThemeContext.Provider value={{ isDark, toggle }}>
        <GlobalStyle $isDark={isDark} />
        <BrowserRouter>
          <CartProvider>
            <LikedProductsProvider>
              <CheckboxProvider>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />

                    <Route element={<BreadcrumbsLayout />}>
                      <Route path="/categories" element={<Categories />} />
                      <Route
                        path="/categories/:id"
                        element={<CategoriesProducts />}
                      />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:id" element={<ProductDetail />} />
                      <Route path="/sale" element={<Sale />} />
                    </Route>

                    <Route path="/shopping-cart" element={<ShoppingCart />} />

                    <Route path="/liked-products" element={<LikedProducts />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </CheckboxProvider>
            </LikedProductsProvider>
          </CartProvider>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;


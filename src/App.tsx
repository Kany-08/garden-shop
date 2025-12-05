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

// const [sortValue, setSortValue] = useState("default");

//   const sortOptions = [
//     { value: "default", label: "by default" },
//     { value: "newest", label: "newest" },
//     { value: "price-high", label: "price: high-low" },
//     { value: "price-low", label: "price: low-high" },
//   ];
//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "inline-block",
//         backgroundColor: "grey",
//       }}
//     >
//       // В JSX:
//       <div style={{ padding: "2rem" }}>
//         <h3>Image Component Examples:</h3>

//         {/* Пример с реальным изображением */}
//         <div style={{ width: "300px", height: "300px", marginBottom: "2rem" }}>
//           <Image
//             src="https://picsum.photos/200"
//             alt="Product example"
//             objectFit="cover"
//           />
//         </div>

//         {/* Пример с несуществующим изображением (покажет placeholder) */}
//         <div style={{ width: "300px", height: "300px", marginBottom: "2rem" }}>
//           <Image src="invalid-url.jpg" alt="Broken image" objectFit="cover" />
//         </div>

//         {/* Пример с contain (для логотипов) */}
//         <div
//           style={{
//             width: "200px",
//             height: "200px",
//             backgroundColor: "#f0f0f0",
//           }}
//         >
//           <Image
//             src="https://picsum.photos/200"
//             alt="Logo example"
//             objectFit="contain"
//           />
//         </div>
//       </div>
//       <div style={{ padding: "2rem" }}>
//         <h3>Sort Products:</h3>
//         <Select
//           options={sortOptions}
//           value={sortValue}
//           onChange={setSortValue}
//         />
//         <p style={{ marginTop: "1rem" }}>Selected: {sortValue}</p>
//       </div>
//       <div>
//         <Button variant="primary" size="medium">
//           Card button
//         </Button>
//         <Button variant="secondary" size="large" type="submit">
//           Banner button
//         </Button>
//         <Button variant="primary" size="small">
//           1 day discount!
//         </Button>
//         <Button variant="secondary" size="medium" disabled>
//           Disabled
//         </Button>
//       </div>
//       <div style={{ gap: "2rem" }}>
//         <Input
//           variant="primary"
//           inputSize="large"
//           type="text"
//           placeholder="Name"
//         />

//         <Input
//           variant="secondary"
//           inputSize="large"
//           type="phone"
//           placeholder="Phone number"
//         />

//         <Input
//           variant="tertiary"
//           inputSize="medium"
//           type="text"
//           placeholder="from"
//         />

//         <Input variant="tertiary" inputSize="small" type="checkbox" />
//         <Input variant="tertiary" inputSize="small" type="checkbox" />
//       </div>
//       <div>
//         <Text variant="heading96" weight="bold" color="white">
//           Amazing Discounts on Garden Products!
//         </Text>
//         <Text variant="body16" weight="regular" color="white" align="center">
//           Заголовок секции
//         </Text>
//       </div>
//       <div>
//         <Icon name="heartLiked" size="semiMedium" />

//         <Icon name="basket" size="semiMedium" />

//         <Icon name="lightMode" size="large" />
//       </div>
//       // В JSX:
//       <div
//         style={{
//           padding: "2rem",
//           display: "flex",
//           gap: "2rem",
//           flexWrap: "wrap",
//         }}
//       >
//         {/* Карточка с прямоугольным badge */}
//         <div
//           style={{
//             position: "relative",
//             width: "200px",
//             height: "150px",
//             backgroundColor: "#f0f0f0",
//             borderRadius: "8px",
//           }}
//         >
//           <SaleBadge>-50%</SaleBadge>
//           <p style={{ padding: "1rem" }}>Товар со скидкой</p>
//         </div>

//         <Badge>
//           <Icon name="like" />
//         </Badge>
//       </div>
//     </div>
//   );

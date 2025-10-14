import { Footer } from "./components/sections/Footer/Footer";
import { Header } from "./components/sections/Header/Header";
// import CartItem from "./components/modules/CartItem/CartItem";
// import { CategoryCard } from "./components/modules/CategoryCard/CategoryCard";
// import CheckboxDiscount from "./components/modules/CheckboxDiscount/CheckboxDiscount";
// import { PriceRange } from "./components/modules/PriceRange/PriceRange";
// import ProductCard from "./components/modules/ProductCard/ProductCard";
// import { SortSelect } from "./components/modules/SortSelect/SortSelect";

function App() {
  return (
    <div className="app">
      {/* <ProductCard
        title="Flower basket"
        price={450}
        oldPrice={600}
        salePercent={17}
        imageUrl=""
      />

      <CategoryCard title="Fertilizer" imageUrl="https://picsum.photos/200" /> */}

      {/* <CartItem
        title="Secauters"
        imageUrl="https://picsum.photos/200"
        price={155}
        oldPrice={240}
      /> */}

      {/* <PriceRange min={20} max={1000} />
      <CheckboxDiscount />
      <SortSelect /> */}
      <Header />
      <Footer />
    </div>
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

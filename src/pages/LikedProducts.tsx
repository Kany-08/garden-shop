import { useContext, useState } from "react";
import ProductCard from "../components/modules/ProductCard/ProductCard";

import type { ProductCardProps } from "../components/modules/ProductCard/ProductCard.types";
import Text from "../components/elements/Text/Text";
import {
  CardsContainer,
  PaddingContainer,
  SortContainer,
} from "./PagesStyles.components";
// import { Link } from "react-router";
import { ThemeContext } from "../App";
import { PriceRange } from "../components/modules/PriceRange/PriceRange";
import { SortSelect } from "../components/modules/SortSelect/SortSelect";
import useFetch from "../hooks/useFetch";
import { useLikedProductsContext } from "../context/LikeProductsContext";
import { API_URL } from "../config";

const LikedProducts = () => {
  const { likedProducts } = useLikedProductsContext();
  const { isDark } = useContext(ThemeContext);

  const { data, loading, error } = useFetch<ProductCardProps[]>(
    `${API_URL}/products/all`
  );
  const [range, setRange] = useState({ min: 0, max: 1000 });
  const [sortValue, setSortValue] = useState("default");

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  if (error) return <p style={{ textAlign: "center" }}>Error: {error}</p>;
  if (!data) return null;

  let likedData = data.filter((item) =>
    likedProducts.some((lp) => lp.id === item.id)
  );

  if (sortValue === "price-low") {
    likedData = [...likedData].sort((a, b) => b.price - a.price);
  }

  if (sortValue === "price-high") {
    likedData = [...likedData].sort((a, b) => a.price - b.price);
  }

  return (
    <PaddingContainer>
      <Text
        variant="heading64"
        weight="bold"
        color={isDark ? "white" : "black"}
      >
        Liked products
      </Text>
      <SortContainer>
        <PriceRange value={range} onChange={setRange} />
        <SortSelect value={sortValue} onChange={setSortValue} />
      </SortContainer>
      <CardsContainer>
        {likedData.map((item) => {
          return <ProductCard {...item} />;
        })}
      </CardsContainer>
    </PaddingContainer>
  );
};

export default LikedProducts;

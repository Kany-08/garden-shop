import { useContext, useState } from "react";
import ProductCard from "../components/modules/ProductCard/ProductCard";
import type { ProductCardProps } from "../components/modules/ProductCard/ProductCard.types";
import Text from "../components/elements/Text/Text";
import {
  CardsContainer,
  PaddingContainer,
  SortContainer,
} from "./PagesStyles.components";
import { ThemeContext } from "../App";
import { PriceRange } from "../components/modules/PriceRange/PriceRange";
import CheckboxDiscount from "../components/modules/CheckboxDiscount/CheckboxDiscount";
import { SortSelect } from "../components/modules/SortSelect/SortSelect";
import useFetch from "../hooks/useFetch";
import { useCheckboxContext } from "../context/CheckboxContext";
import { API_URL } from "../config";

export const Products = () => {
  const { isDark } = useContext(ThemeContext);
  const { isCheckboxed } = useCheckboxContext();
  const { data, loading, error } = useFetch<ProductCardProps[]>(
    `${API_URL}/products/all`
  );
  const [range, setRange] = useState({ min: 0, max: 1000 });
  const [sortValue, setSortValue] = useState("default");

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  if (error) return <p style={{ textAlign: "center" }}>Error: {error}</p>;
  if (!data) return null;

  let products = isCheckboxed ? data.filter((i) => i.discont_price) : data;
  products = products.filter(
    (item) => item.price >= range.min && item.price <= range.max
  );

  if (sortValue === "price-low") {
    products = [...products].sort((a, b) => a.price - b.price);
  }

  if (sortValue === "price-high") {
    products = [...products].sort((a, b) => b.price - a.price);
  }
  return (
    <PaddingContainer>
      <Text
        variant="heading64"
        weight="bold"
        color={isDark ? "white" : "black"}
      >
        All products
      </Text>
      <SortContainer>
        <PriceRange value={range} onChange={setRange} />
        <CheckboxDiscount isChecked={isCheckboxed} />
        <SortSelect value={sortValue} onChange={setSortValue} />
      </SortContainer>
      <CardsContainer>
        {products.map((item) => {
          return <ProductCard {...item} />;
        })}
      </CardsContainer>
    </PaddingContainer>
  );
};

export default Products;

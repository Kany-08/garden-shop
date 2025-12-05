import { useContext, useState } from "react";
import ProductCard from "../components/modules/ProductCard/ProductCard";
import type { ProductCardProps } from "../components/modules/ProductCard/ProductCard.types";
import {
  CardsContainer,
  HeadingContainer,
  Line,
  LineWrapper,
  PreviewListContainer,
  SortContainer,
} from "./PagesStyles.components";
import Text from "../components/elements/Text/Text";
import type { LimitProps } from "./Categories";
import { Link } from "react-router";
import { ThemeContext } from "../App";
import { SortSelect } from "../components/modules/SortSelect/SortSelect";
import { PriceRange } from "../components/modules/PriceRange/PriceRange";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../config";

export const Sale = ({ limit }: LimitProps) => {
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

  const discontProducts = data.filter((item) => item.discont_price);
  let visibleSaleProducts = limit
    ? discontProducts.slice(0, limit)
    : discontProducts;

  visibleSaleProducts = visibleSaleProducts.filter(
    (item) => item.price >= range.min && item.price <= range.max
  );

  if (sortValue === "price-low") {
    visibleSaleProducts = [...visibleSaleProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortValue === "price-high") {
    visibleSaleProducts = [...visibleSaleProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  return (
    <PreviewListContainer>
      <HeadingContainer>
        <Text
          variant="heading64"
          weight="bold"
          color={isDark ? "white" : "black"}
        >
          {limit ? "Sale" : "Discounted Products"}
        </Text>
        {limit && (
          <LineWrapper>
            <Line />
            <Link to="/garden-shop/categories">All sales</Link>
          </LineWrapper>
        )}
      </HeadingContainer>
      {!limit && (
        <SortContainer>
          <PriceRange value={range} onChange={setRange} />
          <SortSelect value={sortValue} onChange={setSortValue} />
        </SortContainer>
      )}

      <CardsContainer>
        {visibleSaleProducts.map((item) => {
          return <ProductCard {...item} />;
        })}
      </CardsContainer>
    </PreviewListContainer>
  );
};

export default Sale;

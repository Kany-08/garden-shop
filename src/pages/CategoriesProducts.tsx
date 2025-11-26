import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { ProductCardProps } from "../components/modules/ProductCard/ProductCard.types";
import {
  CardsContainer,
  PaddingContainer,
  SortContainer,
} from "./PagesStyles.components";
import Text from "../components/elements/Text/Text";

import ProductCard from "../components/modules/ProductCard/ProductCard";

import { PriceRange } from "../components/modules/PriceRange/PriceRange";
import CheckboxDiscount from "../components/modules/CheckboxDiscount/CheckboxDiscount";
import { SortSelect } from "../components/modules/SortSelect/SortSelect";
import { ThemeContext } from "../App";
import { useCheckboxContext } from "../context/CheckboxContext";

const CategoriesProducts = () => {
  const { isCheckboxed } = useCheckboxContext();
  const [data, setData] = useState<ProductCardProps[]>([]);
  const [category, setCategory] =
    useState<Pick<ProductCardProps, "title" | "id">>();
  const [range, setRange] = useState({ min: 0, max: 1000 });
  const [sortValue, setSortValue] = useState("default");

  const { id } = useParams<{ id: string }>();
  const { isDark } = useContext(ThemeContext);
  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3333/categories/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setData(data.data);

        setCategory(data.category);
      })
      .catch((err) => {
        console.error("Error loading data:", err);
      });
  }, [id]);

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
        {category?.title}
      </Text>
      <SortContainer>
        <PriceRange value={range} onChange={setRange} />
        <CheckboxDiscount isChecked={isCheckboxed} />
        <SortSelect value={sortValue} onChange={setSortValue} />
      </SortContainer>

      <CardsContainer>
        {products?.map((item) => {
          return <ProductCard {...item} />;
        })}
      </CardsContainer>
    </PaddingContainer>
  );
};

export default CategoriesProducts;

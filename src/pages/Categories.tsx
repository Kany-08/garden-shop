import { useContext } from "react";
import { CategoryCard } from "../components/modules/CategoryCard/CategoryCard";
import type { CategoryCardProps } from "../components/modules/CategoryCard/CategoryCard.types";
import Text from "../components/elements/Text/Text";
import {
  CardsContainer,
  HeadingContainer,
  Line,
  LineWrapper,
  PreviewListContainer,
} from "./PagesStyles.components";
import { Link } from "react-router";
import { ThemeContext } from "../App";
import useFetch from "../hooks/useFetch";

export type LimitProps = {
  limit?: number;
};

export const Categories = ({ limit }: LimitProps) => {
  const { isDark } = useContext(ThemeContext);
  const { data, loading, error } = useFetch<CategoryCardProps[]>(
    "http://localhost:3333/categories/all"
  );

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  if (error) return <p style={{ textAlign: "center" }}>Error: {error}</p>;
  if (!data) return null;

  const visibleCategories = limit ? data.slice(0, limit) : data;

  return (
    <PreviewListContainer>
      <HeadingContainer>
        <Text
          variant="heading64"
          weight="bold"
          color={isDark ? "white" : "black"}
        >
          Categories
        </Text>
        {limit && (
          <LineWrapper>
            <Line />
            <Link to="/garden-shop/categories">All categories</Link>
          </LineWrapper>
        )}
      </HeadingContainer>

      <CardsContainer>
        {visibleCategories.map((item) => {
          return (
            <Link key={item.id} to={`/garden-shop/categories/${item.id}`}>
              <CategoryCard
                id={item.id}
                title={item.title}
                image={`http://localhost:3333/${item.image}`}
              />
            </Link>
          );
        })}
      </CardsContainer>
    </PreviewListContainer>
  );
};

export default Categories;

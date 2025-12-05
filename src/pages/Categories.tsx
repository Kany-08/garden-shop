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
import { API_URL } from "../config";

export type LimitProps = {
  limit?: number;
};

export const Categories = ({ limit }: LimitProps) => {
  const { isDark } = useContext(ThemeContext);
  const { data, loading, error } = useFetch<CategoryCardProps[]>(
    `${API_URL}/categories/all`
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
            <Link to="/categories">All categories</Link>
          </LineWrapper>
        )}
      </HeadingContainer>

      <CardsContainer>
        {visibleCategories.map((item) => {
          return (
            <Link key={item.id} to={`/categories/${item.id}`}>
              <CategoryCard
                id={item.id}
                title={item.title}
                image={`${API_URL}/${item.image}`}
              />
            </Link>
          );
        })}
      </CardsContainer>
    </PreviewListContainer>
  );
};

export default Categories;

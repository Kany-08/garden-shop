import Image from "../components/elements/Image/Image";
import {
  PaddingContainer,
  ProductDetailContainer,
  ProductDetailImage,
  ProductDetailInfo,
  StyledPriceContainer,
  StyledQuantity,
} from "./PagesStyles.components";
import type { ProductCardProps } from "../components/modules/ProductCard/ProductCard.types";
import { useParams } from "react-router";
import Text from "../components/elements/Text/Text";
import useFetch from "../hooks/useFetch";
import SalePercentageProvider from "../context/SalePercentageContext";
import SaleBadge from "../components/elements/SaleBadge/SaleBadge";
import { QuantityCounter } from "../components/modules/QuantityCounter/QuantityCounter";
import { useCartContext } from "../context/CartContext";
import Button from "../components/elements/Button/Button";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { API_URL } from "../config";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useContext(ThemeContext);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    onAddToCart,
  } = useCartContext();
  const { data, loading, error } = useFetch<ProductCardProps>(
    `${API_URL}/products/${id}`
  );

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  if (error) return <p style={{ textAlign: "center" }}>Error: {error}</p>;
  if (!data) return null;
  return (
    <PaddingContainer>
      {data ? (
        <ProductDetailContainer>
          <ProductDetailImage>
            <Image
              src={`${API_URL}/${data.image}`}
              alt={data.title}
              objectFit="cover"
            />
          </ProductDetailImage>

          <ProductDetailInfo>
            <Text
              variant="heading40"
              weight="bold"
              color={isDark ? "white" : "black"}
            >
              {data.title}
            </Text>
            {data.discont_price ? (
              <StyledPriceContainer>
                <Text
                  variant="price64"
                  color={isDark ? "white" : "black"}
                  weight="bold"
                >
                  ${Math.round(data.discont_price)}
                </Text>
                <Text
                  variant="oldPrice40"
                  crossedOut={true}
                  weight="medium"
                  color="grey"
                >
                  ${Math.round(data.price)}
                </Text>

                <SalePercentageProvider
                  price={Math.round(data.price)}
                  discont_price={Math.round(data.discont_price)}
                >
                  <SaleBadge />
                </SalePercentageProvider>
              </StyledPriceContainer>
            ) : (
              <StyledPriceContainer>
                <Text variant="price40" color="black" weight="semiBold">
                  ${Math.round(data.price)}
                </Text>
              </StyledPriceContainer>
            )}

            <StyledQuantity>
              <QuantityCounter
                value={getItemQuantity(data.id)}
                onIncrease={() => increaseCartQuantity(data.id)}
                onDecrease={() => decreaseCartQuantity(data.id)}
              />
              <Button size="large" onClick={() => onAddToCart(data)}>
                Add to cart
              </Button>
            </StyledQuantity>
            <Text
              variant="heading20"
              weight="semiBold"
              color={isDark ? "white" : "black"}
            >
              Description
            </Text>
            <Text
              variant="body16"
              color={isDark ? "white" : "black"}
              weight="regular"
            >
              {data.description}
            </Text>
          </ProductDetailInfo>
        </ProductDetailContainer>
      ) : (
        <p>Loading...</p>
      )}
    </PaddingContainer>
  );
};

export default ProductDetail;

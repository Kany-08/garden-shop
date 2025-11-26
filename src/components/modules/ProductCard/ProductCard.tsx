import { useContext, type JSX } from "react";
import type { ProductCardProps } from "./ProductCard.types";
import {
  BadgeWrapper,
  IconWrapper,
  StyledCardContainer,
  StyledImageContainer,
  StyledInfoContainer,
  StyledPriceContainer,
} from "./ProductCard.components";
import Image from "../../elements/Image/Image";
import Text from "../../elements/Text/Text";
import SaleBadge from "../../elements/SaleBadge/SaleBadge";
import { Icon } from "../../elements/Icon/Icon";
import { useCartContext } from "../../../context/CartContext";
import SalePercentageProvider from "../../../context/SalePercentageContext";
import { ThemeContext } from "../../../App";
import { useLikedProductsContext } from "../../../context/LikeProductsContext";
import { Link } from "react-router";

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { onAddToCart, cartItems } = useCartContext();
  const { toggleLike, likedProducts } = useLikedProductsContext();
  const { isDark } = useContext(ThemeContext);
  const isLiked = likedProducts.some((item) => item.id === props.id);
  const isBasketClicked = cartItems.some(
    (item) => item.product.id === props.id
  );

  return (
    <StyledCardContainer $isDark={isDark}>
      <StyledImageContainer>
        <Image
          src={`http://localhost:3333/${props.image}`}
          alt={props.title}
          objectFit="cover"
        />
        {props.discont_price && (
          <BadgeWrapper>
            <SalePercentageProvider
              price={props.price}
              discont_price={props.discont_price}
            >
              <SaleBadge />
            </SalePercentageProvider>
          </BadgeWrapper>
        )}

        <IconWrapper>
          <Icon
            name={isLiked ? "heartLiked" : "heartEmpty"}
            hoverIcon="heartHover"
            onClick={() => {
              toggleLike(props.id);
            }}
          />
          <Icon
            onClick={() => onAddToCart(props)}
            name={isBasketClicked ? "basketFull" : "basketEmpty"}
            hoverIcon="basketHover"
          />
        </IconWrapper>
      </StyledImageContainer>
      <Link to={`/garden-shop/products/${props.id}`}>
        <StyledInfoContainer>
          <Text
            variant="heading20"
            color={isDark ? "white" : "black"}
            weight="medium"
            truncate={true}
          >
            {props.title}
          </Text>
          {props.discont_price ? (
            <StyledPriceContainer>
              <Text
                variant="price40"
                color={isDark ? "white" : "black"}
                weight="semiBold"
              >
                ${Math.round(props.discont_price)}
              </Text>
              <Text variant="oldPrice20" crossedOut={true}>
                ${Math.round(props.price)}
              </Text>
            </StyledPriceContainer>
          ) : (
            <StyledPriceContainer>
              <Text
                variant="price40"
                color={isDark ? "white" : "black"}
                weight="semiBold"
              >
                ${props.price}
              </Text>
            </StyledPriceContainer>
          )}
        </StyledInfoContainer>
      </Link>
    </StyledCardContainer>
  );
};

export default ProductCard;

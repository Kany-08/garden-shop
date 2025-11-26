import Image from "../../elements/Image/Image";
import Text from "../../elements/Text/Text";

import { Icon } from "../../elements/Icon/Icon";
import { useCartContext } from "../../../context/CartContext";

import { useLikedProductsContext } from "../../../context/LikeProductsContext";
import type { ProductCardProps } from "../ProductCard/ProductCard.types";
import {
  BadgeWrapper,
  IconWrapper,
  StyledButtonContainer,
  StyledCardContainer,
  StyledImageContainer,
  StyledInfoContainer,
  StyledPriceContainer,
  StyledSaleBadge,
} from "./ProductOfTheDay.components";
import Button from "../../elements/Button/Button";
import type { JSX } from "react";

const ProductOfTheDay = (props: ProductCardProps): JSX.Element => {
  const { onAddToCart } = useCartContext();
  const { toggleLike, likedProducts } = useLikedProductsContext();
  const isLiked = likedProducts.some((item) => item.id === props.id);

  return (
    <>
      <StyledCardContainer>
        <StyledImageContainer>
          <Image
            src={`http://localhost:3333/${props.image}`}
            alt={props.title}
            objectFit="cover"
          />

          <BadgeWrapper>
            <StyledSaleBadge>-50%</StyledSaleBadge>
          </BadgeWrapper>

          <IconWrapper>
            <Icon
              name={isLiked ? "heartLiked" : "heartEmpty"}
              hoverIcon="heartHover"
              onClick={() => {
                toggleLike(props.id);
              }}
            />
          </IconWrapper>
        </StyledImageContainer>

        <StyledInfoContainer>
          <Text variant="heading20" weight="medium" truncate={true}>
            {props.title}
          </Text>
          <StyledPriceContainer>
            <Text variant="price40" weight="semiBold">
              ${props.discont_price && Math.round(props.discont_price)}
            </Text>
            <Text variant="oldPrice20" crossedOut={true}>
              ${Math.round(props.price)}
            </Text>
          </StyledPriceContainer>
        </StyledInfoContainer>
      </StyledCardContainer>
      <StyledButtonContainer>
        <Button
          variant="secondary"
          size="large"
          onClick={() => onAddToCart(props)}
        >
          Add to card
        </Button>
      </StyledButtonContainer>
    </>
  );
};

export default ProductOfTheDay;

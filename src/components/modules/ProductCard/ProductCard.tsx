import { type JSX } from "react";
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

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  return (
    <StyledCardContainer>
      <StyledImageContainer>
        <Image src={props.imageUrl} alt={props.title} objectFit="cover" />
        <BadgeWrapper>
          <SaleBadge>-{props.salePercent}%</SaleBadge>
        </BadgeWrapper>

        <IconWrapper>
          <Icon
            name="heartEmpty"
            togglePair={["heartEmpty", "heartLiked"]}
            hoverIcon="heartHover"
          />
          <Icon
            name="basketEmpty"
            togglePair={["basketEmpty", "basketFull"]}
            hoverIcon="basketHover"
          />
        </IconWrapper>
      </StyledImageContainer>

      <StyledInfoContainer>
        <Text variant="heading20" color="black" weight="medium" truncate={true}>
          {props.title}
        </Text>
        <StyledPriceContainer>
          <Text variant="price40" color="black" weight="semiBold">
            {/* ${isOnSale ? props.salePrice : props.price} */}${props.price}
          </Text>
          <Text variant="oldPrice20" crossedOut={true}>
            ${props.oldPrice}
          </Text>
        </StyledPriceContainer>
      </StyledInfoContainer>
    </StyledCardContainer>
  );
};

export default ProductCard;

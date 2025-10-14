import type { JSX } from "react";
import type { CartItemProps } from "./CartItem.types";
import {
  StyledBodyContainer,
  StyledCartItemContainer,
  StyledFooterContainer,
  StyledHeaderContainer,
  StyledImageContainer,
  StyledPriceContainer,
  StyledRemoveButton,
} from "./CartItem.components";
import Image from "../../elements/Image/Image";
import Text from "../../elements/Text/Text";
import { Icon } from "../../elements/Icon/Icon";
import { QuantityCounter } from "../QuantityCounter/QuantityCounter";

export const CartItem = ({
  title,
  price,
  oldPrice,
  imageUrl,
}: CartItemProps): JSX.Element => {
  return (
    <StyledCartItemContainer>
      <StyledImageContainer>
        <Image src={imageUrl} alt={title} objectFit="cover" />
      </StyledImageContainer>
      <StyledBodyContainer>
        <StyledHeaderContainer>
          <Text variant="heading20" weight="medium">
            {title}
          </Text>
          <StyledRemoveButton>
            <Icon name="x" size="small" />
          </StyledRemoveButton>
        </StyledHeaderContainer>

        <StyledFooterContainer>
          <QuantityCounter value={1} />
          <StyledPriceContainer>
            <Text variant="price40" weight="semiBold">
              ${price}
            </Text>
            <Text variant="oldPrice20" weight="medium" crossedOut>
              ${oldPrice}
            </Text>
          </StyledPriceContainer>
        </StyledFooterContainer>
      </StyledBodyContainer>
    </StyledCartItemContainer>
  );
};

export default CartItem;

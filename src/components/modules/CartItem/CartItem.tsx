import { useContext, type JSX } from "react";
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
import { useCartContext } from "../../../context/CartContext";
import { ThemeContext } from "../../../App";

import type { ProductCardProps } from "../ProductCard/ProductCard.types";
import { API_URL } from "../../../config";

type CartItemProps = {
  product: ProductCardProps;
  quantity: number;
};

export const CartItem = ({
  product,
  quantity,
}: CartItemProps): JSX.Element | null => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useCartContext();
  const { isDark } = useContext(ThemeContext);

  return (
    <StyledCartItemContainer $isDark={isDark}>
      <StyledImageContainer>
        <Image
          src={`${API_URL}/${product.image}`}
          alt={product.title ?? ""}
          objectFit="cover"
        />
      </StyledImageContainer>
      <StyledBodyContainer>
        <StyledHeaderContainer>
          <Text
            variant="heading20"
            weight="medium"
            color={isDark ? "white" : "black"}
          >
            {product.title}
          </Text>
          <StyledRemoveButton onClick={() => removeFromCart(product.id)}>
            <Icon name={isDark ? "xwhite" : "x"} size="small" />
          </StyledRemoveButton>
        </StyledHeaderContainer>

        <StyledFooterContainer>
          <QuantityCounter
            value={quantity}
            onIncrease={() => increaseCartQuantity(product.id)}
            onDecrease={() => decreaseCartQuantity(product.id)}
          />
          {product.discont_price ? (
            <StyledPriceContainer>
              <Text
                variant="price40"
                color={isDark ? "white" : "black"}
                weight="semiBold"
              >
                {"$" + Math.round((product.discont_price ?? 0) * quantity)}
              </Text>
              <Text variant="oldPrice20" crossedOut={true}>
                {"$" + Math.round((product.price ?? 0) * quantity)}
              </Text>
            </StyledPriceContainer>
          ) : (
            <StyledPriceContainer>
              <Text
                variant="price40"
                color={isDark ? "white" : "black"}
                weight="semiBold"
              >
                {"$" + Math.round((product.price ?? 0) * quantity)}
              </Text>
            </StyledPriceContainer>
          )}
        </StyledFooterContainer>
      </StyledBodyContainer>
    </StyledCartItemContainer>
  );
};

export default CartItem;

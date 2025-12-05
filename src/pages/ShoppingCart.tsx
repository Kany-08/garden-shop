import { Link } from "react-router";
import Text from "../components/elements/Text/Text";
import {
  Line,
  LineWrapper,
  CartBodyContainer,
  ShoppingCartContainer,
  CartHeaderContainer,
  CartItemsContainer,
  CartEmptyContainer,
  CartOrderSummaryContainer,
} from "./PagesStyles.components";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/modules/CartItem/CartItem";
import Button from "../components/elements/Button/Button";
import Form from "../components/modules/Form/Form";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { API_URL } from "../config";

const ShoppingCart = () => {
  const { isDark } = useContext(ThemeContext);
  const { cartItems } = useCartContext();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const price = cartItem.product.discont_price ?? cartItem.product.price;
    return total + price * cartItem.quantity;
  }, 0);

  const totalItemsQuantity = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);
  return (
    <ShoppingCartContainer>
      <CartHeaderContainer>
        <Text
          variant="heading64"
          weight="bold"
          nowrap={true}
          color={isDark ? "white" : "black"}
        >
          Shopping cart
        </Text>

        <LineWrapper>
          <Line />
          <Link to="/garden-shop">Back to the store</Link>
        </LineWrapper>
      </CartHeaderContainer>
      {cartItems.length > 0 ? (
        <CartBodyContainer>
          <CartItemsContainer>
            {cartItems.map((item) => (
              <CartItem key={item.product.id} {...item} />
            ))}
          </CartItemsContainer>
          <CartOrderSummaryContainer>
            <Text variant="heading40" weight="bold">
              Order details
            </Text>
            <Text
              variant="price40"
              weight="medium"
              color="grey"
              className="items-quantity"
            >
              {totalItemsQuantity} items
            </Text>
            <div className="total-price">
              <Text variant="price40" weight="medium" color="grey">
                Total
              </Text>
              <Text
                variant="price64"
                weight="bold"
                color="black"
                className="price"
              >
                ${Math.round(totalPrice)},00
              </Text>
            </div>
            <div style={{ width: "484px" }}>
              <Form
                url={`${API_URL}/order/send`}
                variant="order"
                btn="order"
                btnVariant="primary"
              />
            </div>
          </CartOrderSummaryContainer>
        </CartBodyContainer>
      ) : (
        <CartEmptyContainer>
          <Text variant="dicount20" color="black" weight="medium">
            Looks like you have no items in your basket currently.
          </Text>
          <Link to="/garden-shop">
            <Button size="medium">Continue Shopping</Button>
          </Link>
        </CartEmptyContainer>
      )}
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;

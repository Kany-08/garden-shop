import { useContext, useEffect, useState, type JSX } from "react";
import {
  StyledCenterContainer,
  StyledDrawer,
  StyledHamburger,
  StyledHeader,
  StyledLeftContainer,
  StyledRightContainer,
} from "./Header.components";
import { Icon } from "../../elements/Icon/Icon";
import logo from "../../../assets/logo.svg";
import Button from "../../elements/Button/Button";
import Navbar from "../../modules/Navbar/Navbar";
import Hamburger from "hamburger-react";

import { Link } from "react-router";
import { ThemeContext } from "../../../App";
import { useCartContext } from "../../../context/CartContext";
import { useLikedProductsContext } from "../../../context/LikeProductsContext";
import { useRef } from "react";
import Text from "../../elements/Text/Text";
import useFetch from "../../../hooks/useFetch";
import type { ProductCardProps } from "../../modules/ProductCard/ProductCard.types";

import ProductOfTheDay from "../../modules/ProductOfTheDay/ProductOfTheDay";
import { API_URL } from "../../../config";

export const Header = (): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCartContext();
  const { likesQuantity } = useLikedProductsContext();
  const { toggle, isDark } = useContext(ThemeContext);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const { data } = useFetch<ProductCardProps[]>(`${API_URL}/products/all`);

  const [productOfTheDay, setProductOfTheDay] =
    useState<ProductCardProps | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (showPopUp) dialog.showModal();
    else if (dialog.open) dialog.close();
  }, [showPopUp]);

  useEffect(() => {
    if (!data) return;

    const today = new Date().toDateString();
    const storedData = localStorage.getItem("productOfTheDay");

    if (storedData) {
      const parsed = JSON.parse(storedData);
      if (parsed.date === today) {
        setProductOfTheDay(parsed.product);
        return;
      }
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    const baseProduct = data[randomIndex];

    const discountedProduct = {
      ...baseProduct,
      discont_price: baseProduct.price * 0.5, // -50%
    };

    setProductOfTheDay(discountedProduct);

    localStorage.setItem(
      "productOfTheDay",
      JSON.stringify({ date: today, product: discountedProduct })
    );
  }, [data]);

  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <StyledHeader>
        <StyledLeftContainer>
          <div className="logo-bg">
            <Link to="/garden-shop">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>

          <button className="lightmode" onClick={toggle}>
            <Icon
              name="darkMode"
              togglePair={["lightMode", "darkMode"]}
              size="large"
            />
          </button>
        </StyledLeftContainer>

        <StyledCenterContainer>
          <Button
            variant="primary"
            type="button"
            className="btn-discount"
            onClick={() => setShowPopUp(true)}
          >
            1 day discount!
          </Button>
          <Navbar />
        </StyledCenterContainer>

        <StyledRightContainer>
          <Link to="/garden-shop/liked-products">
            <button>
              <Icon name={isDark ? "likeDarkmode" : "like"} />
              {likesQuantity > 0 && (
                <div className="badge">{likesQuantity}</div>
              )}
            </button>
          </Link>
          <Link to="/garden-shop/shopping-cart">
            <button>
              <Icon name={isDark ? "basketDarkmode" : "basket"} />
              {cartQuantity > 0 && <div className="badge">{cartQuantity}</div>}
            </button>
          </Link>

          <StyledHamburger>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </StyledHamburger>
          {isOpen && (
            <StyledDrawer>
              <Navbar />
              <Button
                variant="primary"
                type="button"
                className="btn-discount-mobile"
              >
                1 day discount!
              </Button>
            </StyledDrawer>
          )}
        </StyledRightContainer>
        {showPopUp && (
          <dialog ref={dialogRef}>
            <div>
              <Text variant="price40" weight="semiBold" color="white">
                50% discount on <br /> product of the day!
              </Text>
              <button className="xwhite" onClick={() => setShowPopUp(false)}>
                <Icon name="xwhite" size="small" />
              </button>
            </div>
            {productOfTheDay ? (
              <div>
                <ProductOfTheDay {...productOfTheDay} />
              </div>
            ) : (
              <Text>No product available</Text>
            )}
          </dialog>
        )}
      </StyledHeader>
    </header>
  );
};

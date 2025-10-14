import { useEffect, useState, type JSX } from "react";
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

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <StyledHeader>
        <StyledLeftContainer>
          <img className="logo" src={logo} alt="logo" />
          <Icon
            name="lightMode"
            togglePair={["lightMode", "darkMode"]}
            size="large"
          />
        </StyledLeftContainer>

        <StyledCenterContainer>
          <Button variant="primary" type="button" className="btn-discount">
            1 day discount!
          </Button>
          <Navbar />
        </StyledCenterContainer>

        <StyledRightContainer>
          <Icon name="heartEmpty" />
          <Icon name="basket" />
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
      </StyledHeader>
    </header>
  );
};

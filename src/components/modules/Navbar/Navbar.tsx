import { Link } from "react-router";

import { StyledList } from "./Navbar.components";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

export const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <StyledList $isDark={isDark}>
      <Link to="/garden-shop">Main Page</Link>
      <Link to="/garden-shop/categories">Categories</Link>
      <Link to="/garden-shop/products">All products</Link>
      <Link to="/garden-shop/sale">All sales</Link>
    </StyledList>
  );
};

export default Navbar;

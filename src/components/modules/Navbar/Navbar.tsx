import { Link } from "react-router";

import { StyledList } from "./Navbar.components";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

export const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <StyledList $isDark={isDark}>
      <Link to="/">Main Page</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/products">All products</Link>
      <Link to="/sale">All sales</Link>
    </StyledList>
  );
};

export default Navbar;

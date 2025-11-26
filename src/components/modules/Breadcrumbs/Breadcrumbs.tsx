// import { Link } from "@mui/material";

import { Link, useLocation } from "react-router";
import {
  StyledBreadcrumbs,
  StyledBreadcrumbsContainer,
} from "./Breadcrumbs.components";
import type { BreadcrumbsProps } from "./Breadcrumbs.types";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

export const BreadCrumbs = ({}: BreadcrumbsProps) => {
  const location = useLocation();
  const { isDark } = useContext(ThemeContext);

  return (
    <StyledBreadcrumbsContainer>
      <StyledBreadcrumbs separator="" isdark={isDark}>
        <Link to="/garden-shop">Main page</Link>
        {location.pathname === "/garden-shop/categories" && (
          <Link
            to="/garden-shop/categories"
            className={
              location.pathname.includes("/categories") ? "active" : ""
            }
          >
            Categories
          </Link>
        )}

        {location.pathname === "/garden-shop/categories/" && (
          <Link
            to="/garden-shop/categories/"
            className={
              location.pathname.includes("/categories") ? "active" : ""
            }
          >
            {}
          </Link>
        )}
        {location.pathname === "/garden-shop/products" && (
          <Link
            to="/garden-shop/products"
            className={location.pathname.includes("/products") ? "active" : ""}
          >
            All products
          </Link>
        )}
        {location.pathname === "/garden-shop/sale" && (
          <Link
            to="/garden-shop/sale"
            className={location.pathname.includes("/sale") ? "active" : ""}
          >
            Sale
          </Link>
        )}
      </StyledBreadcrumbs>
    </StyledBreadcrumbsContainer>
  );
};

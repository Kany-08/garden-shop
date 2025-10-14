// import { Link } from "@mui/material";
import { Link } from "@mui/material";
import {
  StyledBreadcrumbs,
  StyledBreadcrumbsContainer,
} from "./Breadcrumbs.components";
import type { BreadcrumbsProps } from "./Breadcrumbs.types";

export const BreadCrumbs = ({}: BreadcrumbsProps) => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      underline="none"
    >
      Main page
    </Link>,
    <Link
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      underline="none"
    >
      Categories
    </Link>,

    <Link
      key="2"
      color="text.primary"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      aria-current="page"
      underline="none"
    >
      Tools and equipment
    </Link>,
  ];
  return (
    <StyledBreadcrumbsContainer>
      <StyledBreadcrumbs separator="">{breadcrumbs}</StyledBreadcrumbs>
    </StyledBreadcrumbsContainer>
  );
};

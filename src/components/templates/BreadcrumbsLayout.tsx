import { Outlet } from "react-router";
import { BreadCrumbs } from "../modules/Breadcrumbs/Breadcrumbs";

const BreadcrumbsLayout = () => {
  return (
    <>
      <BreadCrumbs />
      <Outlet />
    </>
  );
};

export default BreadcrumbsLayout;

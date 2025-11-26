import { Outlet } from "react-router";
import { Header } from "../sections/Header/Header";
import { Footer } from "../sections/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

import { Link } from "react-router";
import Button from "../components/elements/Button/Button";
import Text from "../components/elements/Text/Text";
import Image from "../components/elements/Image/Image";
import nfd from "../assets/404.png";
import { NotFoundContainer } from "./PagesStyles.components";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Image src={nfd} alt="Not Found" objectFit="contain" />
      <Text variant="heading64" weight="bold">
        Page Not Found
      </Text>
      <p>
        We’re sorry, the page you requested could not be found. <br />
        Please go back to the homepage.
      </p>
      <Link to="/garden-shop">
        <Button variant="primary" size="medium">
          Go Home
        </Button>
      </Link>
    </NotFoundContainer>
  );
};
export default NotFound;

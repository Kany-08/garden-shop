import Button from "../components/elements/Button/Button";
import Text from "../components/elements/Text/Text";
import DiscountForm from "../components/sections/DiscountForm/DiscountForm";
import Categories from "./Categories";
import {
  Banner,
  HomePageContainer,
  MainSection,
} from "./PagesStyles.components";
import Sale from "./Sale";

const Home = () => {
  return (
    <HomePageContainer>
      <Banner>
        <Text variant="heading96" color="white" weight="bold">
          Amazing Discounts
          <br />
          on Garden Products!
        </Text>
        <Button size="medium">Check out</Button>
      </Banner>
      <MainSection>
        <Categories limit={4} />
        <DiscountForm />
        <Sale limit={4} />
      </MainSection>
    </HomePageContainer>
  );
};

export default Home;

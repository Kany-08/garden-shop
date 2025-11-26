import Text from "../../elements/Text/Text";
import { Body, DiscountFormContainer } from "./DiscountForm.components";
import hands from "../../../assets/hands.svg";
import Form from "../../modules/Form/Form";
import { PaddingContainer } from "../../../pages/PagesStyles.components";

const DiscountForm = () => {
  return (
    <PaddingContainer>
      <DiscountFormContainer>
        <Text variant="heading64" weight="bold" color="white" align="center">
          5% off on the first order
        </Text>
        <Body>
          <img src={hands} />
          <div
            style={{
              width: "516px",
            }}
          >
            <Form
              url="http://localhost:3333/sale/send"
              btn="Get Discount"
              variant="sale"
              btnVariant="secondary"
            />
          </div>
        </Body>
      </DiscountFormContainer>
    </PaddingContainer>
  );
};

export default DiscountForm;

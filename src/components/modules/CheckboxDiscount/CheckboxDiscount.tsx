import type { JSX } from "react";
import type { CheckboxDiscountProps } from "./CheckboxDiscount.types";

import Text from "../../elements/Text/Text";
import { StyledCheckboxDiscount } from "./CheckboxDiscount.components";

export const CheckboxDiscount = ({}: CheckboxDiscountProps): JSX.Element => {
  return (
    <StyledCheckboxDiscount>
      <label>
        <Text variant="heading20" weight="semiBold">
          Discounted items
        </Text>
        <input type="checkbox" name="checkbox" />
      </label>
    </StyledCheckboxDiscount>
  );
};

export default CheckboxDiscount;

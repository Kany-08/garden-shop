import { useContext, type JSX } from "react";
import type { CheckboxDiscountProps } from "./CheckboxDiscount.types";

import Text from "../../elements/Text/Text";
import { StyledCheckboxDiscount } from "./CheckboxDiscount.components";
import { ThemeContext } from "../../../App";
import { useCheckboxContext } from "../../../context/CheckboxContext";

export const CheckboxDiscount = ({}: CheckboxDiscountProps): JSX.Element => {
  const { isDark } = useContext(ThemeContext);
  const { toggleCheckbox, isCheckboxed } = useCheckboxContext();
  return (
    <StyledCheckboxDiscount>
      <label>
        <Text
          variant="heading20"
          weight="semiBold"
          color={isDark ? "white" : "black"}
        >
          Discounted items
        </Text>
        <input
          type="checkbox"
          name="checkbox"
          checked={isCheckboxed}
          onChange={toggleCheckbox}
        />
      </label>
    </StyledCheckboxDiscount>
  );
};

export default CheckboxDiscount;

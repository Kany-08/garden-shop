import type { JSX } from "react";
import type { PriceRangeProps } from "./PriceRange.types";
import { PriceRangeContainer } from "./PriceRange.components";
import Text from "../../elements/Text/Text";

export const PriceRange = ({ min, max }: PriceRangeProps): JSX.Element => {
  return (
    <PriceRangeContainer>
      <label>
        <Text variant="heading20" weight="semiBold">
          Price
        </Text>
        <input
          type="number"
          name="from"
          placeholder="from"
          min={min}
          max={max}
        />
        <input type="number" name="to" placeholder="to" min={min} max={max} />
      </label>
    </PriceRangeContainer>
  );
};

import { useContext, type ChangeEvent, type JSX } from "react";
import { PriceRangeContainer } from "./PriceRange.components";
import Text from "../../elements/Text/Text";
import { ThemeContext } from "../../../App";

interface PriceRangeProps {
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
}

export const PriceRange = ({
  value,
  onChange,
}: PriceRangeProps): JSX.Element => {
  const { isDark } = useContext(ThemeContext);
  const onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, min: Number(e.target.value) });
  };

  const onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, max: Number(e.target.value) });
  };

  return (
    <PriceRangeContainer>
      <label>
        <Text
          variant="heading20"
          weight="semiBold"
          color={isDark ? "white" : "black"}
        >
          Price
        </Text>
        <input
          type="number"
          name="from"
          placeholder="from"
          value={value.min}
          onChange={onMinChange}
        />
        <input
          type="number"
          name="to"
          placeholder="to"
          value={value.max}
          onChange={onMaxChange}
        />
      </label>
    </PriceRangeContainer>
  );
};

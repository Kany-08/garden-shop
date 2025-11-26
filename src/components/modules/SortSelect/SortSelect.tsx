import { useContext } from "react";
import Select from "../../elements/Select/Select";
import Text from "../../elements/Text/Text";
import { StyledSortSelect } from "./SortSelect.components";
import { ThemeContext } from "../../../App";

interface SortSelectProps {
  value: string;
  onChange: (v: string) => void;
}

export const SortSelect = ({ value, onChange }: SortSelectProps) => {
  const { isDark } = useContext(ThemeContext);

  const sortOptions = [
    { value: "default", label: "by default" },
    { value: "newest", label: "newest" },
    { value: "price-high", label: "price: high-low" },
    { value: "price-low", label: "price: low-high" },
  ];
  return (
    <StyledSortSelect>
      <label>
        <Text
          variant="heading20"
          weight="semiBold"
          color={isDark ? "white" : "black"}
        >
          Sorted
        </Text>
        <Select value={value} onChange={onChange} options={sortOptions} />
      </label>
    </StyledSortSelect>
  );
};

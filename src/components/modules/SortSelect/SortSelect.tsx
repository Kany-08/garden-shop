import { useState } from "react";
import Select from "../../elements/Select/Select";
import Text from "../../elements/Text/Text";
import { StyledSortSelect } from "./SortSelect.components";

export const SortSelect = () => {
  const [sortValue, setSortValue] = useState("default");

  const sortOptions = [
    { value: "default", label: "by default" },
    { value: "newest", label: "newest" },
    { value: "price-high", label: "price: high-low" },
    { value: "price-low", label: "price: low-high" },
  ];
  return (
    <StyledSortSelect>
      <label>
        <Text variant="heading20" weight="semiBold">
          Sorted
        </Text>
        <Select
          value={sortValue}
          onChange={setSortValue}
          options={sortOptions}
        />
      </label>
    </StyledSortSelect>
  );
};

import type { JSX } from "react";
import type { QuantytyCounterProps } from "./QuantityCounter.types";
import { StyledQuantityContainer } from "./QuantityCounter.components";
import { Icon } from "../../elements/Icon/Icon";
import Text from "../../elements/Text/Text";

export const QuantityCounter = ({
  value,
}: QuantytyCounterProps): JSX.Element => {
  return (
    <StyledQuantityContainer>
      <button>
        <Icon name="minus" size="small" />
      </button>

      <Text variant="dicount20" weight="semiBold">
        {value}
      </Text>

      <button>
        <Icon name="plus" size="small" />
      </button>
    </StyledQuantityContainer>
  );
};

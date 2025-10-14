import type { JSX } from "react";
import type { CategoryCardProps } from "./CategoryCard.types";
import {
  StyledCardContainer,
  StyledImageContainer,
  StyledInfoContainer,
} from "./CategoryCard.components";
import Image from "../../elements/Image/Image";
import Text from "../../elements/Text/Text";

export const CategoryCard = ({
  title,
  imageUrl,
  onClick,
}: CategoryCardProps): JSX.Element => {
  return (
    <StyledCardContainer onClick={onClick}>
      <StyledImageContainer>
        <Image src={imageUrl} alt={title} />
      </StyledImageContainer>
      <StyledInfoContainer>
        <Text variant="heading20" weight="medium" align="center">
          {title}
        </Text>
      </StyledInfoContainer>
    </StyledCardContainer>
  );
};

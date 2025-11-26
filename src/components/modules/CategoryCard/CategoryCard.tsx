import { useContext, type JSX } from "react";
import type { CategoryCardProps } from "./CategoryCard.types";
import {
  StyledCardContainer,
  StyledImageContainer,
  StyledInfoContainer,
} from "./CategoryCard.components";
import Image from "../../elements/Image/Image";
import Text from "../../elements/Text/Text";
import { ThemeContext } from "../../../App";

export const CategoryCard = ({
  title,
  image,
  onClick,
}: CategoryCardProps): JSX.Element => {
  const { isDark } = useContext(ThemeContext);
  return (
    <StyledCardContainer onClick={onClick}>
      <StyledImageContainer>
        <Image src={image} alt={title} />
      </StyledImageContainer>
      <StyledInfoContainer>
        <Text
          variant="heading20"
          weight="medium"
          align="center"
          color={isDark ? "white" : "black"}
        >
          {title}
        </Text>
      </StyledInfoContainer>
    </StyledCardContainer>
  );
};

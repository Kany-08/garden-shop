import Text from "../../elements/Text/Text";
import { StyledList, StyledListItem } from "./Navbar.components";

export const Navbar = () => {
  const navItems = ["Main Page", "Categories", "All products", "All sales"];

  return (
    <StyledList>
      {navItems.map((item) => (
        <StyledListItem key={item}>
          <Text variant="navLinkText20" weight="medium" className="list-item">
            {item}
          </Text>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default Navbar;

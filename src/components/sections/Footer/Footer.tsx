import type { JSX } from "react";
import { StyledFooter, StyledMap } from "./Footer.components";
import Text from "../../elements/Text/Text";

import { Icon } from "../../elements/Icon/Icon";
import map from "../../../assets/map.svg";
import { IconWrapper } from "../../elements/Select/Select.components";

export const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <Text variant="heading64" weight="bold">
        Contacts
      </Text>
      <div className="container">
        <div>
          <Text variant="heading20" color="grey" weight="medium">
            Phone
          </Text>
          <Text variant="heading40" color="black" weight="semiBold">
            +49 999 999 99 99
          </Text>
        </div>

        <div>
          <Text variant="heading20" color="grey" weight="medium">
            Socials
          </Text>
          <IconWrapper className="icon-wrapper">
            <Icon name="instagram" size="social" />
            <Icon name="whatsupp" size="social" />
          </IconWrapper>
        </div>

        <div>
          <Text variant="heading20" color="grey" weight="medium">
            Address
          </Text>
          <Text variant="heading40" color="black" weight="semiBold">
            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
          </Text>
        </div>

        <div>
          <Text variant="heading20" color="grey" weight="medium">
            Working Hours
          </Text>
          <Text variant="heading40" color="black" weight="semiBold">
            24 hours a day
          </Text>
        </div>
      </div>
      <StyledMap>
        <img src={map} alt="" />
      </StyledMap>
    </StyledFooter>
  );
};

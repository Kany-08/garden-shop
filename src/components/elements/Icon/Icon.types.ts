// basket > card
import BasketEmpty from "../../../assets/icons/basket/basket=card=empty.svg?react";
import BasketHover from "../../../assets/icons/basket/basket=card=hover.svg?react";
import BasketFull from "../../../assets/icons/basket/basket=card=full.svg?react";

//basket heart > card
import HeartEmpty from "../../../assets/icons/heart/basket=heart=empty.svg?react";
import HeartHover from "../../../assets/icons/heart/basket=like=hover.svg?react";
import HeartLiked from "../../../assets/icons/heart/basket=liked.svg?react";

//mode
import DarkMode from "../../../assets/icons/mode/mode=dark.svg?react";
import LightMode from "../../../assets/icons/mode/mode=light.svg?react";

//nav
import Like from "../../../assets/icons/nav/basket=like.svg?react";
import Basket from "../../../assets/icons/nav/basket=empty.svg?react";

//socMedia
import WhatsUpp from "../../../assets/icons/socia-media/whatsup.svg?react";
import Instagram from "../../../assets/icons/socia-media/instagram.svg?react";

//other
import X from "../../../assets/icons/x.svg?react";
import Xwhite from "../../../assets/icons/x-white.svg?react";
import Minus from "../../../assets/icons/minus.svg?react";
import Plus from "../../../assets/icons/plus.svg?react";
import Menu from "../../../assets/icons/menu.svg?react";

//arrow
import ArrowUp from "../../../assets/icons/arrow-up.svg?react";
import ArrowDown from "../../../assets/icons/arrow-down.svg?react";

export const iconMap = {
  basketEmpty: BasketEmpty,
  basketHover: BasketHover,
  basketFull: BasketFull,
  heartEmpty: HeartEmpty,
  heartHover: HeartHover,
  heartLiked: HeartLiked,
  darkMode: DarkMode,
  lightMode: LightMode,
  like: Like,
  basket: Basket,
  whatsupp: WhatsUpp,
  instagram: Instagram,
  x: X,
  xwhite: Xwhite,
  minus: Minus,
  plus: Plus,
  menu: Menu,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
} as const;

export type IconName = keyof typeof iconMap;
export type IconSize =
  | "xsm"
  | "small"
  | "medium"
  | "semiMedium"
  | "large"
  | "social";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: IconSize;
  togglePair?: [IconName, IconName];
  hoverIcon?: IconName;
}

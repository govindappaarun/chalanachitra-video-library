import styled from "styled-components";
import { ColorTypes, SizeTypes } from "../types/types";
import { StyleSvgProps } from "./Icon.styled";

import { ReactComponent as Wish } from "../../assets/svg/heart.svg";
import { ReactComponent as Cart } from "../../assets/svg/shopping-cart.svg";
import { ReactComponent as User } from "../../assets/svg/user.svg";
import { ReactComponent as CreditCard } from "../../assets/svg/credit-card.svg";
// import { ReactComponent as briefcase } from "../../assets/svg/briefcase.svg";
import { ReactComponent as star } from "../../assets/svg/star.svg";
import { ReactComponent as home } from "../../assets/svg/home.svg";
import { ReactComponent as cpu } from "../../assets/svg/cpu.svg";
import { ReactComponent as lifebuoy } from "../../assets/svg/life-buoy.svg";
import { ReactComponent as dribble } from "../../assets/svg/dribble.svg";

export type IconProps = {
  color?: ColorTypes;
  hoverColor?: string;
  size?: SizeTypes;
};

export const WishIcon = styled(Wish)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const CartIcon = styled(Cart)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const UserIcon = styled(User)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const StarIcon = styled(star)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const HomeIcon = styled(home)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const DribbleIcon = styled(dribble)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const CpuIcon = styled(cpu)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const LifebuoyIcon = styled(lifebuoy)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

export const CreditCardIcon = styled(CreditCard)<IconProps>`
  ${(props) => StyleSvgProps(props)}
`;

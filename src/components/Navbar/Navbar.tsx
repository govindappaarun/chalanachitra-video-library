import { BoxProps } from "../Box/Box";
import StyledNavbar from "./Navbar.styled";
export type NavBarProps = {
  children: React.ReactNode;
  className?: string;
};
const Navbar = ({ children, ...rest }: NavBarProps | BoxProps) => {
  return (
    <StyledNavbar as="nav" {...rest}>
      {children}
    </StyledNavbar>
  );
};

export default Navbar;

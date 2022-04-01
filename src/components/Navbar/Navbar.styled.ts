import styled from "styled-components";
import { NavBarProps } from "./Navbar";
import Box from "../Box";

const Navbar = styled(Box)<NavBarProps>`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  min-height: 4rem;
  box-shadow: ${(props) => props.theme.boxShadow.bs1};
  padding: 0 1.8rem;
  z-index: 1000;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};

  .nav-left,
  .nav-right {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .nav-right {
    margin-left: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .nav-left > i,
  .nav-right > i {
    padding: 0 10px;
    margin: 0 5px;
    color: currentColor;
  }

  .navbar-sticky {
    position: sticky;
    top: 0;
  }

  .navbar-light {
    background-color: ${(p) => p.theme.neutral.light};
    color: var(--black);
  }

  .navbar-dark {
    background-color: ${(p) => p.theme.neutral.dark};
    color: var(--white);
  }

  .navbar-primary {
    background-color: ${(p) => p.theme.primary.main};
    color: ${(p) => p.theme.white};
  }
`;

export default Navbar;

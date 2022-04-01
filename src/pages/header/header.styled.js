import { Input, NavBar } from "src/components";
import styled from "styled-components";
import { RiContrastFill } from "react-icons/ri";

export const Wrapper = styled.div`
  /* background-color: ${(p) => p.theme.neutral.main};
  color: ${(p) => p.theme.primary.main}; */
  background-color: ${(p) => p.theme.primary.main};
  color: ${(p) => p.theme.primary.contrastText};
`;

export const StyledNavBar = styled(NavBar)`
  background-color: ${(p) => p.theme.neutral.dark};
  color: ${(p) => p.theme.white};
`;

export const SearchInput = styled(Input)`
  max-width: 15rem;
  border: 1px solid ${(p) => p.theme.secondary.main};
`;

export const ThemeIcon = styled(RiContrastFill)`
  font-size: 2rem;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &.reverse {
    transform: rotate(-180deg);
  }
`;

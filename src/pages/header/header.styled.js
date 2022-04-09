import { Input, NavBar } from "src/components";
import styled from "styled-components";
import { RiContrastFill } from "react-icons/ri";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.base.main};
  color: ${(p) => p.theme.base.contrast};
`;

export const StyledNavBar = styled(NavBar)`
  box-shadow: 0px 4px 5px ${(p) => p.theme.base.shade};
  & .brand-container {
    cursor: pointer;
  }
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

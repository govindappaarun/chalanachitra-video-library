import { Input, NavBar } from "src/components";
import styled from "styled-components";
import { RiContrastFill } from "react-icons/ri";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.base.main};
  color: ${(p) => p.theme.base.contrast};
  margin-bottom: 5px;
`;

export const StyledNavBar = styled(NavBar)`
  box-shadow: 0px 5px 5px ${(p) => p.theme.base.shade};
  min-height: 6rem;
  & .brand-container {
    cursor: pointer;
  }
  .search-bar {
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px 10px;
    min-width: 20vw;
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

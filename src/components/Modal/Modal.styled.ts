import styled from "styled-components";
import Box from "../Box";

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
`;

const Main = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  padding: 1rem;
  min-height: 25vh;
  min-width: 25vw;
  max-width: 100%;
  z-index: 1000;

  background: ${(p) => p.theme.base.main};
  box-shadow: 0 0 0.5rem 0.6rem ${(p) => p.theme.background.bg20};
`;

const Header = styled.header`
  display: flex;
  .close {
    margin-left: auto;
    cursor: pointer;
  }
`;

const Footer = styled.footer``;

export { Wrapper as default, Main, Header, Footer };

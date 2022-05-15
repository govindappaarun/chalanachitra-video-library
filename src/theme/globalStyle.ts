import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon {
    margin: 0.2 rem;
  }
  
  .fs-1 {
    font-size: 1rem;
  }

  .fs-2 {
    font-size: 2rem;
  }

  .videos-container {
    min-height: 70vh;
    position: relative;
    .no-videos {
      font-size: 1.5rem;
      font-weight: 400;
      max-width: 30ch;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      a {
        color: #1676F3;
        text-decoration: none;
      }
    }
  }

`;

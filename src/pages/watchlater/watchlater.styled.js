import styled from "styled-components";

export const Wrapper = styled.div`
  .no-videos {
    margin-top: 1rem;
  }
  & > .video-container {
    min-height: 70vh;
    position: relative;
    .no-videos {
      font-size: 2rem;
      font-weight: 400;
      max-width: 35ch;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .video {
    min-width: 30rem;
  }
`;

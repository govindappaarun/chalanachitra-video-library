import React from "react";
import { Box } from "src/components";
import { StyledAnchor, Wrapper } from "./footer.styled";
import { BsTwitter, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <Wrapper>
      <Box>All rights reserved</Box>
      <Box className="ml-auto">
        <StyledAnchor href="https://github.com/govindappaarun">
          <BsTwitter />
        </StyledAnchor>
        <StyledAnchor href="https://twitter.com/govindappaarun">
          <BsGithub />
        </StyledAnchor>
      </Box>
    </Wrapper>
  );
}

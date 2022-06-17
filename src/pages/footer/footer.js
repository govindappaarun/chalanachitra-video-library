import React from "react";
import { Box, Typography } from "src/components";
import { StyledAnchor, Wrapper } from "./footer.styled";
import { BsTwitter, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <Wrapper>
      <Typography variant="h2">All rights reserved</Typography>
      <Box className="ml-auto" display="flex" gap="md">
        <StyledAnchor href="https://twitter.com/govindappaarun">
          <BsTwitter />
        </StyledAnchor>
        <StyledAnchor href="https://github.com/govindappaarun">
          <BsGithub />
        </StyledAnchor>
      </Box>
    </Wrapper>
  );
}

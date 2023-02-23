import React from "react";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { StyledFooter, IconStyleWrapper, Link, Emoji } from "./style";

const gitHubLink = "https://github.com/tomi5";

const Footer = () => {
  return (
    <StyledFooter>
      <Link href={gitHubLink} target="_blank">
        <IconStyleWrapper>
          <Github />
        </IconStyleWrapper>
        Made with{" "}
        <Emoji className="emoji" role="img" aria-label="heart">
          ❤
        </Emoji>{" "}
        by Tomi5
      </Link>
    </StyledFooter>
  );
};

export default Footer;

import React from "react";
import { StyledButton, IconStyleWrapper } from "./style";

type ButtonProps = {
  name: ButtonName;
  icon?: any;
  onClick?: any;
  padding?: string;
  paddingIcon?: string;
  isModalOpen?: boolean;
  "aria-expanded"?: boolean;
  posAbsolute?: boolean;
  children?: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { icon: IconSVG, children: buttonText, paddingIcon } = props;

  function IconContainer() {
    return (
      <IconStyleWrapper padding={paddingIcon}>
        <IconSVG />
      </IconStyleWrapper>
    );
  }

  return (
    <StyledButton {...props}>
      {IconSVG ? <IconContainer /> : null}
      {buttonText}
    </StyledButton>
  );
};

export default Button;

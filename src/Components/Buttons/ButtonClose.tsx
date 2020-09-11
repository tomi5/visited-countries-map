import React from "react";
import { ButtonCLose, IconStyleWrapper } from "./style";
import { Close } from "@styled-icons/evil/Close";

type ButtonCloseProps = {
  handleClose: () => void;
};

const ButtonClose = ({ handleClose }: ButtonCloseProps) => {
  return (
    <ButtonCLose name="close" onClick={handleClose} padding={"3px"}>
      <IconStyleWrapper>
        <Close />
      </IconStyleWrapper>
    </ButtonCLose>
  );
};

export default ButtonClose;

import React from "react";
import { Button, IconStyleWrapper } from "./style";
import { Help } from "@styled-icons/entypo/Help";

type ButtonInfoProps = {
  name: string;
  openStatus: boolean;
  handleToggleModal: () => void;
};

const ButtonInfo = ({
  name,
  openStatus,
  handleToggleModal,
}: ButtonInfoProps) => {
  return (
    <Button
      name={name}
      posAbsolute
      onClick={handleToggleModal}
      aria-expanded={openStatus}
    >
      <IconStyleWrapper padding={"7px"}>
        <Help />
      </IconStyleWrapper>
    </Button>
  );
};

export default ButtonInfo;

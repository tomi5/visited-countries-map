import React from "react";
import { ButtonComponent } from "./style";

type ButtonInfoProps = {
  name: string;
  // openStatus: boolean;
  handleToggleModal: () => void;
  text: string;
};

const ButtonInfo = ({
  name,
  // openStatus,
  handleToggleModal,
  text,
}: ButtonInfoProps) => {
  return (
    <ButtonComponent
      name={name}
      // openStatus={openStatus}
      onClick={handleToggleModal}
      // aria-expanded={openStatus}
    >
      {text}
    </ButtonComponent>
  );
};

export default ButtonInfo;

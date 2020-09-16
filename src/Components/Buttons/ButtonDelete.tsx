import React from "react";
import { Button } from "./style";

type ButtonDeleteProps = {
  action: Exclude<ActionTypes, "add">;
  handleClick: any; // FIXME - fix "any" type
  isModalOpen?: boolean;
};

const ButtonDelete = ({
  action,
  handleClick,
  isModalOpen,
}: ButtonDeleteProps) => (
  <>
    <Button name="delete" disabled={isModalOpen} onClick={handleClick}>
      {action === "delete" ? "Delete" : "Reset the map"}
    </Button>
  </>
);

export default ButtonDelete;

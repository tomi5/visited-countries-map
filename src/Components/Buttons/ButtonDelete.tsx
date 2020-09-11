import React from "react";

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
    <button disabled={isModalOpen} onClick={handleClick}>
      {action === "delete" ? "Delete" : "Reset the map"}
    </button>
  </>
);

export default ButtonDelete;

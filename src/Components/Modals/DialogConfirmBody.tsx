import React from "react";
import { ModalBodyWrapper } from "./style";

type DialogConfirmBodyProps = {
  action: Exclude<ActionTypes, "add" | undefined>;
  handleClick: (action: "confirm" | "cancel") => void;
};

const DialogConfirmBody = ({ action, handleClick }: DialogConfirmBodyProps) => {
  return (
    <ModalBodyWrapper>
      <p>
        Are you sure to{" "}
        {action === "delete" ? "delete the country?" : "reset the map?"}
      </p>
      <button onClick={() => handleClick("confirm")}>Confirm</button>
      <button onClick={() => handleClick("cancel")}>Cancel</button>
    </ModalBodyWrapper>
  );
};

export default DialogConfirmBody;

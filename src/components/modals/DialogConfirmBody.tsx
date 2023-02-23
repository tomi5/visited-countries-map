import React from "react";
import Button from "../button/Button";
import { ModalBodyWrapper, Text, ButtonsContainer } from "./style";

type DialogConfirmBodyProps = {
  action: DeleteOrReset;
  handleClick: (shouldDelete: ActionConfirm) => void;
  children?: React.ReactElement;
};

const DialogConfirmBody = React.forwardRef<
  HTMLDivElement,
  DialogConfirmBodyProps
>(({ action, handleClick = () => null }, ref) => {
  return (
    <ModalBodyWrapper info={false} ref={ref} tabIndex={-1}>
      <Text id="simple-modal-title">
        Are you sure to{" "}
        {action === "delete" ? "delete the country?" : "reset the map?"}
      </Text>
      <ButtonsContainer>
        <Button name="cancel" onClick={() => handleClick("cancel")}>
          Cancel
        </Button>
        <Button name="confirm" onClick={() => handleClick("confirm")}>
          {action}
        </Button>
      </ButtonsContainer>
    </ModalBodyWrapper>
  );
});

export default DialogConfirmBody;

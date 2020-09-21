import React from "react";
import Button from "../Button/Button";
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
    <ModalBodyWrapper ref={ref} tabIndex={-1}>
      <Text id="simple-modal-title">
        Are you sure to{" "}
        {action === "delete" ? "delete the country?" : "reset the map?"}
      </Text>
      <ButtonsContainer>
        <Button name="regular" onClick={() => handleClick("confirm")} action="confirm">
          Confirm
        </Button>
        <Button name="regular" onClick={() => handleClick("cancel")} action="cancel" >
          Cancel
        </Button>
      </ButtonsContainer>
    </ModalBodyWrapper>
  );
});

export default DialogConfirmBody;

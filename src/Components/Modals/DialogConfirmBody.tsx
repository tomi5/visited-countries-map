import React from "react";
import RegularButton from "../Buttons/RegularButton";
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
        <RegularButton type={"confirm"} handleClick={handleClick}>
          Confirm
        </RegularButton>
        <RegularButton type={"cancel"} handleClick={handleClick}>
          Cancel
        </RegularButton>
      </ButtonsContainer>
    </ModalBodyWrapper>
  );
});

export default DialogConfirmBody;

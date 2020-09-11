import React from "react";
import { Modal as ModalM } from "@material-ui/core";
import InfoBody from "./InfoBody";
import DialogConfirmBody from "./DialogConfirmBody";

type DeleteOrReset = Exclude<ActionTypes, "add">;

type ModalProps = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
  confirmDialog?: boolean;
  action?: DeleteOrReset;
  handleClick?: (action: "confirm" | "cancel") => void;
};

const Modal = ({
  isModalOpen,
  handleToggleModal,
  confirmDialog,
  action,
  handleClick = () => null,
}: ModalProps) => (
  <ModalM
    open={isModalOpen}
    onClose={handleToggleModal}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {confirmDialog ? (
      <DialogConfirmBody
        action={action as DeleteOrReset}
        handleClick={handleClick}
      />
    ) : (
      <InfoBody handleToggleModal={handleToggleModal} />
    )}
  </ModalM>
);

export default Modal;

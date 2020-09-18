import React from "react";
import { Modal as ModalMaterialUi } from "@material-ui/core";
import InfoBody from "./InfoBody";
import DialogConfirmBody from "./DialogConfirmBody";

type ModalProps = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
  confirmDialog?: boolean;
  action?: DeleteOrReset;
  handleClick?: (shouldDelete: ActionConfirm) => void;
  title?: string;
};

const Modal = ({
  isModalOpen,
  handleToggleModal,
  confirmDialog,
  action,
  handleClick = () => null,
  title,
}: ModalProps) => {
  return (
    <ModalMaterialUi
      disableScrollLock
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
          <InfoBody
            title={title as string}
            handleToggleModal={handleToggleModal}
          />
        )}
    </ModalMaterialUi>
  );
};

export default Modal;

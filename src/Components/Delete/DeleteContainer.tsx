import React, { useState, useContext } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import ButtonDelete from "../Buttons/ButtonDelete";
import Modal from "../Modals/Modal";

type DeleteContainerProps = {
  action: Exclude<ActionTypes, "add">;
  removeUsingMap?: any; // FIXME - fix "any" type
};

const DeleteContainer = ({ action, removeUsingMap }: DeleteContainerProps) => {
  const initialModalState = removeUsingMap ? true : false;
  const [isModalOpen, setIsModalOpen] = useState(initialModalState);

  const {
    shouldDeleteFromVisited,
    deleteFromVisited,
    countryToRemove,
  } = useContext(VisitedCountryContext);

  const handleToggleModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  const handleShouldDelete = (e: any) => {
    // FIXME - fix "any" type
    handleToggleModal();
    shouldDeleteFromVisited(e, action);
  };

  const onConfirm = (shouldDelete: ActionConfirm) => {
    handleToggleModal();
    if (shouldDelete === "cancel") return;
    deleteFromVisited(countryToRemove);
  };

  return (
    <>
      {!removeUsingMap && (
        <ButtonDelete
          handleClick={(e: any) => handleShouldDelete(e)} // FIXME - fix "any" type
          action={action}
          isModalOpen={isModalOpen}
        />
      )}
      <Modal
        confirmDialog
        handleToggleModal={handleToggleModal}
        action={action}
        isModalOpen={isModalOpen}
        handleClick={onConfirm}
      />
    </>
  );
};

export default DeleteContainer;

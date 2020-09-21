import React, { useState, useContext } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import Button from "../Button/Button";
import Modal from "../Modals/Modal";
import { SettingsBackupRestore } from "@styled-icons/material/SettingsBackupRestore";
import { Trash } from "@styled-icons/bootstrap/Trash";

type DeleteContainerProps = {
  action: Exclude<ActionTypes, "add">;
  removeUsingMap?: any; // FIXME - fix "any" type
};

const DeleteContainer = ({ action, removeUsingMap }: DeleteContainerProps) => {
  let buttonText, buttonIcon, buttonName;
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

  switch (action) {
    case 'reset':
      buttonText = "Reset the map";
      buttonIcon = SettingsBackupRestore;
      buttonName = 'reset';
      break;
    case "delete":
      buttonText = null;
      buttonIcon = Trash;
      buttonName = 'delete';
      break;
  }

  return (
    <>
      {!removeUsingMap && (
        <Button
          name={buttonName}
          onClick={(e: any) => handleShouldDelete(e)} // FIXME - fix "any" type          
          isModalOpen={isModalOpen}
          icon={buttonIcon}
        >{buttonText}</Button>
      )
      }
      <Modal
        confirmDialog
        handleToggleModal={handleToggleModal}
        isModalOpen={isModalOpen}
        action={action}
        handleClick={onConfirm}
      />
    </>
  );
};

export default DeleteContainer;

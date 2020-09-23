import React, { useState, useContext } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import Button from "../Button/Button";
import Modal from "../Modals/Modal";
import { SettingsBackupRestore } from "@styled-icons/material/SettingsBackupRestore";
import { Trash } from "@styled-icons/bootstrap/Trash";

type DeleteContainerProps = {
  action: DeleteOrReset;
  removeUsingMap?: boolean;
};

const DeleteContainer = ({ action, removeUsingMap }: DeleteContainerProps) => {
  console.log('removeUsingMap:', removeUsingMap)

  const initialModalState = removeUsingMap ? true : false;
  const [isModalOpen, setIsModalOpen] = useState(initialModalState);
  console.log('isModalOpen:', isModalOpen)

  const {
    shouldDeleteFromVisited,
    deleteFromVisited,
    countryToRemove,
  } = useContext(VisitedCountryContext);
  console.log('countryToRemove:', countryToRemove)

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

  let buttonText, props

  switch (action) {
    case 'reset':
      buttonText = "Reset the map";
      props = {
        name: 'reset',
        icon: SettingsBackupRestore,
        padding: "5px 10px",
        paddingIcon: "0 5px 0 0"
      }
      break;
    case "delete":
      buttonText = null;
      props = {
        name: 'delete',
        icon: Trash,
        padding: "0",
        paddingIcon: "5px"
      }
      break;
  }

  return (
    <>
      {!removeUsingMap && (
        <Button
          onClick={(e: any) => handleShouldDelete(e)} // FIXME - fix "any" type          
          isModalOpen={isModalOpen}
          {...props}
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

import React, { useState, useContext } from "react";
import ConfirmDialog from "../Modals/DialogConfirm";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import ButtonDelete from "../Buttons/ButtonDelete";

type DeleteContainerProps = {
  action: Exclude<ActionTypes, "add">;
  removeUsingMap?: any; // FIXME - fix "any" type
};

const DeleteContainer = ({ action, removeUsingMap }: DeleteContainerProps) => {
  const initialDialogState = removeUsingMap ? true : false;
  const [isDialogOpen, setIsDialogOpen] = useState(initialDialogState);
  const {
    shouldDeleteFromVisited,
    deleteFromVisited,
    countryToRemove,
  } = useContext(VisitedCountryContext);

  const handleToggleDialog = () => {
    setIsDialogOpen((isDialogOpen) => !isDialogOpen);
  };

  const handleShouldDelete = (e: any) => {
    // FIXME - fix "any" type
    handleToggleDialog();
    shouldDeleteFromVisited(e, action);
  };

  const onConfirm = (shouldDelete: ActionConfirm) => {
    handleToggleDialog();
    if (shouldDelete === "cancel") return;
    deleteFromVisited(countryToRemove);
  };

  return (
    <>
      {!removeUsingMap && (
        <ButtonDelete
          handleClick={(e: any) => handleShouldDelete(e)} // FIXME - fix "any" type
          action={action}
          isDialogOpen={isDialogOpen}
        />
      )}
      <ConfirmDialog
        action={action}
        isDialogOpen={isDialogOpen}
        handleClick={onConfirm}
      />
    </>
  );
};

export default DeleteContainer;

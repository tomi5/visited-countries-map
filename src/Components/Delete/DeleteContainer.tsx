import React, { useState, useContext } from 'react';

import ConfirmDialog from '../Dialog/ConfirmDialog';
import { VisitedCountryContext } from '../../contexts/visitedCountryContext';
import DeleteButton from '../Buttons/DeleteButton';

type DeleteContainerProps = {
  action: Exclude<ActionTypes, 'add'>;
  removeUsingMap?: any;
};

const DeleteContainer = ({ action, removeUsingMap }: DeleteContainerProps) => {
  const initialDialogState = removeUsingMap ? true : false;
  const [isDialogOpen, setIsDialogOpen] = useState(initialDialogState);
  const { shouldDeleteFromVisited, deleteFromVisited, countryToRemove } = useContext(
    VisitedCountryContext
  );

  const handleToggleDialog = () => {
    setIsDialogOpen(isDialogOpen => !isDialogOpen);
  };

  const handleShouldDelete = (e: any) => {
    handleToggleDialog();
    shouldDeleteFromVisited(e, action);
  };

  const onConfirm = (shouldDelete: ActionConfirm) => {
    handleToggleDialog();
    if (shouldDelete === 'cancel') return;
    deleteFromVisited(countryToRemove);
  };

  return (
    <>
      {!removeUsingMap && (
        <DeleteButton
          handleClick={(e: any) => handleShouldDelete(e)}
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

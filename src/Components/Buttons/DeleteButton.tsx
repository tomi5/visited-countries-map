import React from 'react';

type DeleteButtonProps = {
  action: Exclude<ActionTypes, 'add'>;
  handleClick: any;
  isDialogOpen?: boolean;
};

const DeleteButton = ({ action, handleClick, isDialogOpen }: DeleteButtonProps) => (
  <>
    <button disabled={isDialogOpen} onClick={handleClick}>
      {action === 'delete' ? 'Delete' : 'Reset the map'}
    </button>
  </>
);

export default DeleteButton;

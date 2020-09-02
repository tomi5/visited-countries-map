import React from 'react';

type ButtonDeleteProps = {
  action: Exclude<ActionTypes, 'add'>;
  handleClick: any; // FIXME - fix "any" type
  isDialogOpen?: boolean;
};

const ButtonDelete = ({ action, handleClick, isDialogOpen }: ButtonDeleteProps) => (
  <>
    <button disabled={isDialogOpen} onClick={handleClick}>
      {action === 'delete' ? 'Delete' : 'Reset the map'}
    </button>
  </>
);

export default ButtonDelete;

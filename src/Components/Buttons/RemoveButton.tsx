import React from 'react';

type RemoveButtonProps = {
  action: Exclude<ActionTypes, 'add'>;
  handleClick: any;
  isModalActive?: boolean;
};

const RemoveButton = ({ action, handleClick, isModalActive }: RemoveButtonProps) => (
  <>
    <button disabled={isModalActive} onClick={handleClick}>
      {action === 'delete' ? 'Delete' : 'Reset the map'}
    </button>
  </>
);

export default RemoveButton;

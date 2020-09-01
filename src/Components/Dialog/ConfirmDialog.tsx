import React from 'react';

type ConfirmDialogProps = {
  isDialogOpen: boolean;
  action: Exclude<ActionTypes, 'add'>;
  handleClick: (action: 'confirm' | 'cancel') => void;
};

const ModalConfirmRemove = ({
  action,
  isDialogOpen,
  handleClick
}: ConfirmDialogProps) => {
  return (
    <div style={{ display: !isDialogOpen ? 'none' : 'block' }}>
      <p>
        Are you sure to{' '}
        {action === 'delete' ? 'delete the country?' : 'reset the map?'}
      </p>
      <button onClick={() => handleClick('confirm')}>Confirm</button>
      <button onClick={() => handleClick('cancel')}>Cancel</button>
    </div>
  );
};

export default ModalConfirmRemove;

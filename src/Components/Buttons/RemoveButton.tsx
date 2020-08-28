import React from 'react';

type RemoveButtonProps = {
  onClick: any;
};

const RemoveButton = ({ ...props }: RemoveButtonProps) => (
  <button {...props}>Delete</button>
);

export default RemoveButton;

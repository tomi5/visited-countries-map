import React, { useContext } from 'react';
import { VisitedCountryContext } from '../../contexts/visitedCountryContext';

const ModalConfirmRemove = () => {
  const {
    handleToggleModal,
    isModalActive,
    handleConfirmRemoveFromVisited,
    countryToRemove,
  } = useContext(VisitedCountryContext);

  enum Act {
    Confirm,
    Cancel,
  }

  const handleClick = (action: Act) => {
    handleToggleModal();
    if (action === Act.Cancel) return;
    handleConfirmRemoveFromVisited(countryToRemove);
  };

  return (
    <div style={{ display: !isModalActive ? 'none' : 'block' }}>
      <p>Are you sure to delete?</p>
      <button onClick={() => handleClick(Act.Confirm)}>Confirm</button>
      <button onClick={() => handleClick(Act.Cancel)}>Cancel</button>
    </div>
  );
};

export default ModalConfirmRemove;

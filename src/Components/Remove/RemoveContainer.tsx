import React, { useState, useContext } from 'react';
import RemoveButton from '../Buttons/RemoveButton';
import ModalConfirmRemove from '../Modals/ModalRemoveCountry';
import { VisitedCountryContext } from '../../contexts/visitedCountryContext';

type RemoveContainerProps = {
  action: Exclude<ActionTypes, 'add'>;
  removeUsingMap?: any;
};

const RemoveContainer = ({ action, removeUsingMap }: RemoveContainerProps) => {
  const initialModalState = removeUsingMap ? true : false;
  const [isModalActive, setIsModalActive] = useState(initialModalState);
  const { shouldDeleteFromVisited, deleteFromVisited, countryToRemove } = useContext(
    VisitedCountryContext
  );

  const handleToggleModal = () => {
    setIsModalActive(isModalActive => !isModalActive);
  };

  const handleShouldDelete = (e: any) => {
    handleToggleModal();
    shouldDeleteFromVisited(e, action);
  };

  const onConfirm = (shouldDelete: ActionConfirm) => {
    handleToggleModal();
    if (shouldDelete === 'cancel') return;
    deleteFromVisited(countryToRemove);
  };

  return (
    <>
      {!removeUsingMap && (
        <RemoveButton
          handleClick={(e: any) => handleShouldDelete(e)}
          action={action}
          isModalActive={isModalActive}
        />
      )}
      <ModalConfirmRemove
        action={action}
        isModalActive={isModalActive}
        handleClick={onConfirm}
      />
    </>
  );
};

export default RemoveContainer;

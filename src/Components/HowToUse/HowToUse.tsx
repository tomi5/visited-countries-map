import React, { useState } from "react";
import ButtonInfo from "../Buttons/ButtonInfo";
import Modal from "../Modals/Modal";

type HowToUseProps = {
  title: string;
};
const HowToUse = ({ title }: HowToUseProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <>
      <ButtonInfo
        name={"info"}
        handleToggleModal={handleToggleModal}
        openStatus={isModalOpen}
      />
      <Modal
        title={title}
        isModalOpen={isModalOpen}
        handleToggleModal={handleToggleModal}
      />
    </>
  );
};

export default HowToUse;

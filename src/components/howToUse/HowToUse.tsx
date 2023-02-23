import React, { useState } from "react";
import Button from "../button/Button";
import Modal from "../modals/Modal";
import { Help } from "@styled-icons/entypo/Help";

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
      <Button
        name="info"
        onClick={handleToggleModal}
        isModalOpen={isModalOpen}
        icon={Help}
        aria-expanded={isModalOpen}
        paddingIcon="7px"
        posAbsolute={true}
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

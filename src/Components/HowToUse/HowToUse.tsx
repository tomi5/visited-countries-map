import React from "react";
import styled from "styled-components";

import Modal from "@material-ui/core/Modal";
import ButtonInfo from "../Buttons/ButtonInfo";

const ModalWrapper = styled.div`
  position: absolute;
  width: 400px;
  background-color: ${({ theme }: { theme: any }) => theme.element};
  top: 50%;
  left: 50%;
  color: ${({ theme }: { theme: any }) => theme.text};
  transform: translate(-50%, -50%);
`;

const HowToUse = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <ModalWrapper>
      <button onClick={handleClose}>X</button>
      <ul>
        <li>
          To select the countries you visited you can use a search box to type
          in the country name (or only part of the name) or two-letter country
          code (ISO 3166-1 alpha-2).
        </li>
        <li>
          You can also select the country directly from the map (by clicking on
          it).
        </li>
        <li>
          Selected countries are displayed both in the table divided into
          continents and higlihted on the map.
        </li>
        <li>
          To remove the country from the list click the trash icon next to the
          country name (in the table).
        </li>
        <li>
          You can check how many countries you traveled to and what percentage
          of countries you visited with a counter.
        </li>
      </ul>
    </ModalWrapper>
  );

  return (
    <>
      <ButtonInfo
        name={"info"}
        text={"?"}
        handleToggleModal={handleOpen}
        openStatus={open}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default HowToUse;

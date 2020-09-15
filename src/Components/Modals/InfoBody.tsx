import React from "react";
import ButtonClose from "../Buttons/ButtonClose";
import { ModalBodyWrapper } from "./style";

type InfoBodyProps = {
  handleToggleModal: () => void;
  children?: React.ReactElement;
};

const InfoBody = React.forwardRef<HTMLDivElement, InfoBodyProps>(
  ({ handleToggleModal }, ref) => {
    return (
      <ModalBodyWrapper ref={ref} tabIndex={-1}>
        <ButtonClose handleClose={handleToggleModal} />
        <ul id="simple-modal-description">
          <li>
            To select the countries you visited you can use a search box to type
            in the country name (or only part of the name) or two-letter country
            code (ISO 3166-1 alpha-2).
          </li>
          <li>
            You can also select the country directly from the map (by clicking
            on it).
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
      </ModalBodyWrapper>
    );
  }
);

export default InfoBody;

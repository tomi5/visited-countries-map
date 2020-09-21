import React from "react";
import Button from "../Button/Button";
import {
  ModalBodyWrapper,
  Heading,
  StyledP,
  InfoList,
  ListItemTitle,
  ListItem,
} from "./style";
import { Close } from "@styled-icons/evil/Close";

type InfoBodyProps = {
  handleToggleModal: () => void;
  title: string;
  children?: React.ReactElement;
};

const InfoBody = React.forwardRef<HTMLDivElement, InfoBodyProps>(
  ({ handleToggleModal, title }, ref) => {
    return (
      <ModalBodyWrapper ref={ref} tabIndex={-1}>
        <Button name="close" onClick={handleToggleModal} icon={Close} padding="3px" />
        <Heading>{title}</Heading>
        <StyledP>
          Using this map you can find out how many countries you have already
          visited and how many % of the world it is. If you have 1 country
          visited at least, the table will shown below the map.
        </StyledP>
        <StyledP>FAQ:</StyledP>
        <InfoList id="simple-modal-description">
          <ListItemTitle>How can I select a country?</ListItemTitle>
          <ListItem>
            To select the countries you visited you can use a search box to type
            in the country name (or only part of the name) or two-letter country
            code (ISO 3166-1 alpha-2).
          </ListItem>
          <ListItemTitle>
            How Can I change a color of selected country?
          </ListItemTitle>
          <ListItem>
            You can also select the country directly from the map (by clicking
            on it).
          </ListItem>
          <ListItemTitle>How Can I remove a country?</ListItemTitle>
          <ListItem>
            Selected countries are displayed both in the table divided into
            continents and higlihted on the map.
          </ListItem>
          <ListItemTitle>
            When I close a map the result will save?
          </ListItemTitle>
          <ListItem>
            To remove the country from the list click the trash icon next to the
            country name (in the table).
          </ListItem>
          <ListItemTitle>What the reset the map button is?</ListItemTitle>
          <ListItem>
            You can check how many countries you traveled to and what percentage
            of countries you visited with a counter.
          </ListItem>
        </InfoList>
      </ModalBodyWrapper>
    );
  }
);

export default InfoBody;

import React from "react";
import Button from "../button/Button";
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
      <ModalBodyWrapper info={true} ref={ref} tabIndex={-1}>
        <Button
          name="close"
          onClick={handleToggleModal}
          icon={Close}
          padding="3px"
        />
        <Heading>{title}</Heading>
        <StyledP>
          Using this map you can find out how many countries you have already
          visited and what percentage of the world it is. If you have 1 country
          visited at least, detailed table with the division into continents
          will shown below the map.
        </StyledP>
        <StyledP>FAQ:</StyledP>
        <InfoList id="simple-modal-description">
          <ListItemTitle>
            How can I select the country I have visited?
          </ListItemTitle>
          <ListItem>
            You can click the country you are interested in on the map or
            (either if the country is too small or you don't know where it is)
            you can use a search box. Just type the country name (or only part
            of the name) or two-letter country code (ISO 3166-1 alpha-2). The
            country name must be in English or in the native language.
          </ListItem>
          <ListItemTitle>
            I hate a green color. Can I change a color of fill?
          </ListItemTitle>
          <ListItem>
            Of course. You can use the color palette next to the map. Choose the
            color you are interested in and further select countries. Tip: The
            map may be multi-colored.
          </ListItem>
          <ListItemTitle>
            I select the country by mistake, how can I remove it?
          </ListItemTitle>
          <ListItem>
            You can double-click the country (on the map) or click the trash
            icon next to the country in the table
          </ListItem>
          <ListItemTitle>Will my results be saved?</ListItemTitle>
          <ListItem>
            Your settings are storage in browser's memory (local storage). Until
            you clean it, you will be able to enjoy the created map, after
            refreshing the browser.
          </ListItem>
          <ListItemTitle>What is the "reset the map" button for?</ListItemTitle>
          <ListItem>
            Be careful. It deletes all the countries you have been already
            selected.
          </ListItem>
        </InfoList>
      </ModalBodyWrapper>
    );
  }
);

export default InfoBody;

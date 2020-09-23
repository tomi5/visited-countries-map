import React from "react";
import { ListItem, Flag, CountryName, StyledButton, StyledDiv } from "./style";
import DeleteContainer from "../Delete/DeleteContainer";
type CountryItemProps = {
  country: ICountry;
  continent?: string;
  handleClick?: IEvent<any>; // FIXME - fix "any" type
  listType: "searchResult" | "tabel";
};

const CountryItem = ({
  country: { name, code, flag },
  continent,
  handleClick,
  listType,
}: CountryItemProps) => {
  const Tag = (listType === "searchResult"
    ? StyledButton
    : StyledDiv) as React.ElementType;

  function TagContent() {
    return (
      <>
        <Flag src={flag} alt={`flag of ${name}`} />
        <CountryName>{name}</CountryName>
        {listType === "tabel" ? <DeleteContainer action="delete" /> : null}
      </>
    );
  }

  return (
    <ListItem listType={listType}>
      <Tag
        data-id={code}
        data-name={name}
        data-continent={continent}
        onClick={handleClick}
      >
        <TagContent />
      </Tag>
    </ListItem>
  );
};

export default React.memo(CountryItem);

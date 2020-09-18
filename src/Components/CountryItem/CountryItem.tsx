import React, { ReactNode } from "react";
import { ListItem, Flag, CountryName, StyledButton, StyledDiv } from "./style";
import RemoveContainer from "../Delete/DeleteContainer";
type CountryItemProps = {
  country: ICountry;
  continent?: string;
  handleClick?: IEvent<any>; // FIXME - fix "any" type  
  searchList?: boolean;
};

const CountryItem = ({
  country: { name, code, flag },
  continent,
  handleClick,
  searchList,
}: CountryItemProps) => {

  const isStyled = searchList ? true : false;

  const Tag = (searchList ? StyledButton : StyledDiv) as React.ElementType;

  const TagContent = () => {
    return <>
      <Flag src={flag} alt={`flag of ${name}`} />
      <CountryName>{name}</CountryName>
      { !searchList ? <RemoveContainer action={"delete"} /> : null}
    </>
  }

  return (
    <ListItem styled={isStyled}>
      <Tag
        data-id={code}
        data-name={name}
        data-continent={continent}
        onClick={handleClick}
      >
        <TagContent />
      </Tag>
    </ListItem >
  );
};

export default React.memo(CountryItem);

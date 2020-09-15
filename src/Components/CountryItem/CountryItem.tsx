import React, { ReactNode } from "react";
import { ListItem, Flag, CountryName, StyledButton, StyledDiv } from "./style";

type CountryItemProps = {
  country: ICountry;
  continent?: string;
  handleClick?: IEvent<any>; // FIXME - fix "any" type
  children?: ReactNode;
  listType?: string;
};

const CountryItem = ({
  country: { name, code, flag },
  continent,
  handleClick,
  children,
  listType,
}: CountryItemProps) => {
  const Tag = children ? StyledDiv : StyledButton;

  return (
    <ListItem listType={listType}>
      <Tag
        data-id={code}
        data-name={name}
        data-continent={continent}
        onClick={handleClick}
      >
        <Flag src={flag} alt={`flag of ${name}`} />
        <CountryName>{name}</CountryName>
        {children}
      </Tag>
    </ListItem>
  );
};

export default React.memo(CountryItem);

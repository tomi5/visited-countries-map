import React, { ReactElement } from "react";

type CountryItemProps = {
  country: ICountry;
  continent?: string;
  onClick?: IEvent<any>;
  children?: ReactElement;
};

const CountryItem = ({ country, continent, ...props }: CountryItemProps) => {
  const { name, code, flag } = country;

  return (
    <li data-id={code} data-name={name} data-continent={continent} {...props}>
      <img
        src={flag}
        alt={`flag of ${name}`}
        style={{ width: "auto", height: "20px" }}
      />
      {name}
      {props.children}
    </li>
  );
};

export default CountryItem;

import React, { ReactNode } from "react";

type CountryItemProps = {
  country: ICountry;
  onClick?: IEvent<any>;
  children?: ReactNode;
};

const CountryItem = ({ country, ...props }: CountryItemProps) => {
  const { name, code, flag } = country;

  return (
    <li key={code} data-id={code} data-name={name} {...props}>
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

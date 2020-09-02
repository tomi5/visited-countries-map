import React, { ReactNode } from 'react';

type CountryItemProps = {
  country: ICountry;
  continent?: string;
  handleClick?: IEvent<any>; // FIXME - fix "any" type
  children?: ReactNode;
};

const CountryItem = ({
  country: { name, code, flag },
  continent,
  handleClick,
  children
}: CountryItemProps) => {
  return (
    <li
      data-id={code}
      data-name={name}
      data-continent={continent}
      onClick={handleClick}
    >
      <img
        src={flag}
        alt={`flag of ${name}`}
        style={{ width: 'auto', height: '20px' }}
      />
      {name}
      {children}
    </li>
  );
};

export default React.memo(CountryItem);

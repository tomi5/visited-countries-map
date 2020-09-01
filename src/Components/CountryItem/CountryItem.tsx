import React from 'react';

type CountryItemProps = {
  country: ICountry;
  continent?: string;
  handleClick?: IEvent<any>;
  children?: any;
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

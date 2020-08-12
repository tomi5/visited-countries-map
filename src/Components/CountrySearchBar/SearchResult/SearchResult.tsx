import React from "react";

type SearchResultProps = {
  country: ICountry;
  onClick: IEvent<any>;
};

const SearchResult = ({ country, onClick }: SearchResultProps) => {
  const { code, name, flag } = country;

  console.log("log z searchresult");
  return (
    <>
      <li data-id={code} data-name={name} onClick={onClick}>
        <img
          src={flag}
          alt={`flag of ${name}`}
          style={{ width: "auto", height: "20px" }}
        />
        {name}
      </li>
    </>
  );
};

export default SearchResult;

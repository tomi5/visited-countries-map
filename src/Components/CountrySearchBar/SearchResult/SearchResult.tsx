import React from "react";

type SearchResultProps = {
  name: string;
  flag: string;
  alpha2Code: string;
  onClick: IEvent<any>;
};

const SearchResult = ({
  name,
  flag,
  alpha2Code,
  onClick,
}: SearchResultProps) => {
  return (
    <>
      <li data-id={alpha2Code} onClick={onClick}>
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

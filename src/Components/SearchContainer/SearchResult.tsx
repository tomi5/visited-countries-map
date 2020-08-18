import React from "react";

type SearchResultProps = {
  state: IFetchState;
  countriesToShow: ICountry[];
  handleSelectCountry: IEvent<any>;
};

const SearchResult = ({
  state,
  countriesToShow,
  handleSelectCountry,
}: SearchResultProps) => {
  const { error, isLoading } = state;

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ border: "1px solid black", margin: "5px" }}>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && countriesToShow.length ? (
        <ul>
          {countriesToShow.map(({ code, name, flag }) => (
            <li
              key={code}
              data-id={code}
              data-name={name}
              onClick={handleSelectCountry}
            >
              <img
                src={flag}
                alt={`flag of ${name}`}
                style={{ width: "auto", height: "20px" }}
              />
              {name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchResult;

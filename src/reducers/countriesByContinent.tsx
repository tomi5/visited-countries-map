export const initialState: ContinentsInitialState = {
  Africa: [],
  Asia: [],
  Europe: [],
  Oceania: [],
  Polar: [],
};

export const continentReducer = (
  state = initialState,
  action: { type: Continents; payload: ICountry[] }
) => {
  switch (action.type) {
    case "Africa":
      return { ...state, Africa: action.payload };
    case "Asia":
      return { ...state, Asia: action.payload };
    case "Europe":
      return { ...state, Europe: action.payload };
    case "Oceania":
      return { ...state, Oceania: action.payload };
    case "Polar":
      return { ...state, Polar: action.payload };
    default:
      return state;
  }
};

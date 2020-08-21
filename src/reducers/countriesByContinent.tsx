export const initialState: ContinentsInitialState = {
  Antarctica: [],
  Africa: [],
  "America North": [],
  "America South": [],
  Asia: [],
  Europe: [],
  Oceania: [],
};

export const continentReducer = (
  state = initialState,
  action: { type: ContinentsToShow; payload: ICountry[] }
) => {
  switch (action.type) {
    case "Antarctica":
      return { ...state, Antarctica: action.payload };
    case "Africa":
      return { ...state, Africa: action.payload };
    case "America North":
      return { ...state, "America North": action.payload };
    case "America South":
      return { ...state, "America South": action.payload };
    case "Asia":
      return { ...state, Asia: action.payload };
    case "Europe":
      return { ...state, Europe: action.payload };
    case "Oceania":
      return { ...state, Oceania: action.payload };
    default:
      return state;
  }
};

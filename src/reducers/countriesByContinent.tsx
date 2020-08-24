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
  action: {
    type: ReducerActionTypes;
    continent: ContinentsToShow;
    payload: ICountry[] | null;
  }
) => {
  switch (action.type) {
    case "Antarctica":
      return { ...state, [action.continent]: action.payload };
    case "Africa":
      return { ...state, [action.continent]: action.payload };
    case "America North":
      return { ...state, [action.continent]: action.payload };
    case "America South":
      return { ...state, [action.continent]: action.payload };
    case "Asia":
      return { ...state, [action.continent]: action.payload };
    case "Europe":
      return { ...state, [action.continent]: action.payload };
    case "Oceania":
      return { ...state, [action.continent]: action.payload };
    case "Remove":
      return { ...state, [action.continent]: action.payload };
    default:
      return state;
  }
};

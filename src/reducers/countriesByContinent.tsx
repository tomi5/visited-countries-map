export const initialState: CountriesByContinent = {
  Antarctica: [],
  Africa: [],
  'America North': [],
  'America South': [],
  Asia: [],
  Europe: [],
  Oceania: [],
};

export const continentReducer = (state = initialState, action: ReducerAction) => {
  switch (action.type) {
    case 'Add':
      return { ...state, [action.continent]: action.payload };
    case 'Remove':
      return { ...state, [action.continent]: action.payload };
    default:
      return state;
  }
};

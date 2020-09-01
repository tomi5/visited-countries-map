export const initialState: CountriesByContinent = {
  Antarctica: [],
  Africa: [],
  'America North': [],
  'America South': [],
  Asia: [],
  Europe: [],
  Oceania: []
};

export const continentReducer = (state = initialState, action: ReducerAction) => {
  switch (action.type) {
    case 'add':
      return { ...state, [action.continent as ContinentsToShow]: action.payload };
    case 'delete':
      return { ...state, [action.continent as ContinentsToShow]: action.payload };
    case 'reset':
      return {
        Antarctica: [],
        Africa: [],
        'America North': [],
        'America South': [],
        Asia: [],
        Europe: [],
        Oceania: []
      };
    default:
      return state;
  }
};

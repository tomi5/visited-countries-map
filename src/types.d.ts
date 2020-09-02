interface IEvent<T> {
   (e: { target: T });
}

type NodeTypes = 'path' | 'button';

interface IFetchState {
   error: string | null;
   isLoading: boolean;
}

type ICountry = {
   [key in CountryFeatures]: string;
};

interface ICreateContext {
   visitedCountries: ICountry[];
   selectedCountry: string | null;
   searchValue: string;
   percentageVisisted: number;
   pickedColor: string;
   handleColorPicker: any; // FIXME - fix "any" type
   selectCountryFn: any; // FIXME - fix "any" type
   handleSearchInputChanges: any; // FIXME - fix "any" type
}

type UpdateVisited = {
   (arr: ICountry[]): void;
};

type ContinentsToShow =
   | 'Africa'
   | 'Antarctica'
   | 'America North'
   | 'America South'
   | 'Asia'
   | 'Europe'
   | 'Oceania';

type AmericasSubregion =
   | 'Caribbean'
   | 'Central America'
   | 'Northern America'
   | 'South America';

type ContinetsFromApi =
   | 'Africa'
   | 'Americas'
   | 'Asia'
   | 'Europe'
   | 'Oceania'
   | 'Polar';

type CountriesByContinent = {
   [key in ContinentsToShow]: ICountry[];
};

type ActionTypes = 'add' | 'delete' | 'reset';
type ActionConfirm = 'confirm' | 'cancel';

type ReducerAction = {
   type: ActionTypes;
   continent?: ContinentsToShow;
   payload?: ICountry[];
};

type MethodsOnArray<T, E> = {
   (arr: ICountry[], country: T): E;
};

interface IDispatchObj extends ReducerAction {
   continentsState: CountriesByContinent;
   country: string | ICountry;
   payloadFn: MethodsOnArray<T, ICountry[]>;
   dispatchfn: (obj: ReducerAction) => void;
}

type CountryToRemove = {
   countryToRemoveID: string;
   continentName: ContinentsToShow;
};

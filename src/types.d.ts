interface IEvent<T> {
  (e: { target: T }): void;
}
interface ICountry {
  name: string;
  code: string;
  flag: string;
  region: string;
  subregion: string;
}

interface IFetchState {
  error: string | null;
  isLoading: boolean;
  countriesToShow: ICountry[];
}

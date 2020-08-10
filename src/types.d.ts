interface IEvent<T> {
  (e: { target: T }): void;
}

interface IHooksState {
  error: string | null;
  isLoading: boolean;
  countries: string[];
}

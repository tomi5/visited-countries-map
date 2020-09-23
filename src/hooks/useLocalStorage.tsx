import { useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  // FIXME - fix "any" type
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setLocalStorage = (value: (arg0: any) => any) => {
    // FIXME - fix "any" type
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setLocalStorage];
};

export default useLocalStorage;

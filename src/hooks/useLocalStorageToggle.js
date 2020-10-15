import { useState } from "react";

function useLocalStorageToggle(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  })

  const setValue = value => {
    const valueToStore =
      value instanceof Function ? value(storedValue) : value;

    const foundInArray = storedValue.includes(valueToStore);

    const newList = foundInArray
      ? [...storedValue.filter(item => item !== valueToStore)]
      : [...storedValue, valueToStore];

    window.localStorage.setItem(key, JSON.stringify(newList));
    setStoredValue(newList);
  }

  return [storedValue, setValue];
}

export default useLocalStorageToggle;

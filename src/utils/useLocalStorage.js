import { useState, useEffect } from 'react';
export const useLocalStorage = (lsName, defaultValues) => {
  const [item, setItem] = useState(
    () => JSON.parse(localStorage.getItem(lsName)) ?? defaultValues
  );

  useEffect(() => {
    localStorage.setItem(lsName, JSON.stringify(item));
  }, [item, lsName]);

  return [item, setItem];
};

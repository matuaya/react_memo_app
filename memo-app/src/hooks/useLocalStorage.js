import { useState, useEffect } from "react";

function getMemosByLocalStorage(key) {
  const savedValue = localStorage.getItem(key);
  return savedValue ? JSON.parse(savedValue) : [];
}

export default function useLocalStorage(key) {
  const [value, setValue] = useState(() => getMemosByLocalStorage(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

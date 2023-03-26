import { useState, useEffect } from "react";

type StorageKey = string;

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

export function useLocalStorage<T>(storageKey: StorageKey, initialValue: T): [T, SetValue<T>] {
  const [localStoredValue, setLocalStoredValue] = useState<T>(() => {
    const state = localStorage.getItem(storageKey);
    return state ? JSON.parse(state) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(localStoredValue));
  }, [storageKey, localStoredValue]);

  return [localStoredValue, setLocalStoredValue];
}

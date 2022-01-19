import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
const getValue = (key, initValue) => {
  const value = window.localStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }
  return initValue;
};
export default function useLocalStorage(key, initValue) {
  const [state, setState] = useState(getValue(key, initValue));
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

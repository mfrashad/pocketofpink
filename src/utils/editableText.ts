// Text-content overrides for elements wrapped in <EditableText>.
// Persisted to localStorage so user-typed edits survive a refresh.
// Defaults live in src/config/text.json so they can be committed back.

import { useEffect, useState } from 'react';
import defaultTexts from '../config/text.json';

export type TextMap = Record<string, string>;

const STORAGE_KEY = 'pop-editable-text';
const baseDefaults: TextMap = defaultTexts as TextMap;

const safeParse = (raw: string | null): TextMap => {
  if (!raw) return {};
  try {
    const v = JSON.parse(raw);
    return v && typeof v === 'object' ? (v as TextMap) : {};
  } catch {
    return {};
  }
};

export const loadTexts = (): TextMap => {
  if (typeof window === 'undefined') return { ...baseDefaults };
  return { ...baseDefaults, ...safeParse(window.localStorage.getItem(STORAGE_KEY)) };
};

export const saveTexts = (map: TextMap): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  window.dispatchEvent(new CustomEvent('pop-text-changed'));
};

export const resetTexts = (): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('pop-text-changed'));
};

export const useText = (id: string, fallback: string): [string, (next: string) => void] => {
  const read = () => loadTexts()[id] ?? fallback;
  const [value, setValue] = useState<string>(read);

  useEffect(() => {
    const onChange = () => setValue(read());
    window.addEventListener('pop-text-changed', onChange);
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener('pop-text-changed', onChange);
      window.removeEventListener('storage', onChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, fallback]);

  const update = (next: string) => {
    const map = loadTexts();
    if (next === fallback) {
      delete map[id];
    } else {
      map[id] = next;
    }
    saveTexts(map);
    setValue(next);
  };

  return [value, update];
};

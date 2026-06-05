// Manual layout editor — overrides for any element wrapped in <Editable>.
// Persisted to localStorage. Exportable as JSON, can be pasted into
// src/config/layout.json so changes survive a fresh browser / new machine.

import { useEffect, useState } from 'react';
import defaultLayout from '../config/layout.json';

export interface LayoutItem {
  x: number;        // px offset from natural position
  y: number;        // px offset from natural position
  scale: number;    // multiplier of natural size (1 = no change)
  rotation: number; // degrees
  z: number;        // stacking order (higher = on top)
  /** Optional max-width in px. Used for text blocks to control wrapping. */
  width?: number;
  /** Optional text-align override. */
  align?: 'left' | 'center' | 'right' | 'justify';
}

export type LayoutMap = Record<string, LayoutItem>;

const STORAGE_KEY = 'pop-editable-layout';

const baseDefaults: LayoutMap = defaultLayout as LayoutMap;

const safeParse = (raw: string | null): LayoutMap => {
  if (!raw) return {};
  try {
    const v = JSON.parse(raw);
    return v && typeof v === 'object' ? (v as LayoutMap) : {};
  } catch {
    return {};
  }
};

export const loadLayout = (): LayoutMap => {
  if (typeof window === 'undefined') return { ...baseDefaults };
  return { ...baseDefaults, ...safeParse(window.localStorage.getItem(STORAGE_KEY)) };
};

export const saveLayout = (map: LayoutMap): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  // notify other components listening
  window.dispatchEvent(new CustomEvent('pop-layout-changed'));
};

export const resetLayout = (): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('pop-layout-changed'));
};

// Hook that returns current layout for a given id and a setter to update it.
export const useLayoutItem = (id: string): [LayoutItem, (next: LayoutItem) => void] => {
  const read = (): LayoutItem => {
    const map = loadLayout();
    const v = map[id];
    return {
      x: v?.x ?? 0,
      y: v?.y ?? 0,
      scale: v?.scale ?? 1,
      rotation: v?.rotation ?? 0,
      z: v?.z ?? 0,
      width: v?.width,
      align: v?.align,
    };
  };
  const [item, setItem] = useState<LayoutItem>(read);

  useEffect(() => {
    const onChange = () => setItem(read());
    window.addEventListener('pop-layout-changed', onChange);
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener('pop-layout-changed', onChange);
      window.removeEventListener('storage', onChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const update = (next: LayoutItem) => {
    const map = loadLayout();
    map[id] = next;
    saveLayout(map);
    setItem(next);
  };

  return [item, update];
};

// Edit mode toggle — driven by URL ?edit=1
export const useEditMode = (): boolean => {
  const detect = (): boolean => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('edit') === '1';
  };
  const [on, setOn] = useState<boolean>(detect);
  useEffect(() => {
    const onChange = () => setOn(detect());
    window.addEventListener('popstate', onChange);
    return () => window.removeEventListener('popstate', onChange);
  }, []);
  return on;
};

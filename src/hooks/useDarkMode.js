import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'portfolio-theme';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Default to dark (this design is dark-first), but respect stored preference
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }

    if (stored === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
      } catch {
        /* ignore storage errors (e.g. private mode) */
      }
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
      return next;
    });
  }, []);

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;

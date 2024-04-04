import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const currentMode = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentMode);
  }, [darkMode]);

  useEffect(() => {
    setDarkMode(
      window?.matchMedia('(prefers-color-scheme: dark)')?.matches ?? false
    );
  }, []);
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={styles.component}>
      <div
        onClick={handleToggle}
      >
        {darkMode ? 'Night' : 'Day'}
      </div>
    </div>
  );
};
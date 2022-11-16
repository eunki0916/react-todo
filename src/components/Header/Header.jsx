import React from "react";
import styles from "./Header.module.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
// 다크모드 콘텍스트 연결
import { useDarkMode } from "../context/DarkModeContext";

const Header = ({ filters, filter, onFliterChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <BsFillMoonFill />}
        {darkMode && <BsFillSunFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFliterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

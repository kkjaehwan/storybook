import React from "react";
import styles from './style.module.scss';
import logoPropTypes from "./LogoPropTypes";

const Logo = ({ logoText, onClick }) => {
  return (
    <div className={styles.logo} onClick={onClick}>{logoText}</div>
  );
};

Logo.propTypes = logoPropTypes;

export default Logo;

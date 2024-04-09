import React from "react";
import styles from './style.module.scss';
import logoPropTypes from "./LogoPropTypes";

const Logo = ({ logoText, onClick, type = "default" }) => {
  return (
    <div className={styles.logo} onClick={onClick} type={type}>{logoText}</div>
  );
};

Logo.propTypes = logoPropTypes;

export default Logo;

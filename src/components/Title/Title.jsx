import React from "react";
import styles from './style.module.scss';
import TitleMapPropTypes from "./TitlePropTypes";

const Title = ({ title = "Hello", type = "default" }) => {
  return (
    <div className={styles.title} type={type}>
      <div className={styles.bar_area}></div>
      <div className={styles.title_area}>{title}</div>
    </div>
  );
}
Title.propTypes = TitleMapPropTypes;

export default Title;

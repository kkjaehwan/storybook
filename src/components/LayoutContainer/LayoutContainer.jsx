import React from "react";
import styles from './style.module.scss';
import LayoutContainerPropTypes from "./LayoutContainerPropTypes";

const LayoutContainer = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      {children}
    </div >
  );
};

LayoutContainer.propTypes = LayoutContainerPropTypes;

export default LayoutContainer;

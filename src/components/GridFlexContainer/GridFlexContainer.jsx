import React from "react";
import styles from './style.module.scss';
import gridFlexContainerPropTypes from "./GridFlexContainerPropTypes";

const GridFlexContainer = ({ children, containerType = "grid", borderType = 'inner', colCount, separatorGap = '1px', separatorThickness, separatorColor, childPadding }) => {

  return (
    <div
      className={containerType === 'grid' ? styles.gridContainer : styles.flexContainer}
      borderType={borderType}
      style={{
        "--separator-col-count": colCount,
        "--separator-gap": borderType === 'full' && separatorGap ? separatorGap : separatorThickness * 2,
        "--separator-line-offset": separatorThickness,
        "--separator-line-thickness": separatorThickness,
        "--separator-line-color": separatorColor,
        "--separator-child-padding": childPadding
      }}
    >
      {children}
    </div>
  );
};

GridFlexContainer.propTypes = gridFlexContainerPropTypes;

export default GridFlexContainer;

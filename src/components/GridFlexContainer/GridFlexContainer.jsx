import React from "react";
import styles from './style.module.scss';
import gridFlexContainerPropTypes from "./GridFlexContainerPropTypes";
import Title from "@components/Title/Title";

const GridFlexContainer = ({ title = "GridFlexContainer", type = "default", children, containerType = "grid", borderType = 'inner', colCount, separatorGap = '1px', separatorThickness, separatorColor, childPadding }) => {

  return (
    <div className={styles.gridFlexContainer} type={type}>
      {title && <Title title={title} type={type} />}
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
    </div>
  );
};

GridFlexContainer.propTypes = gridFlexContainerPropTypes;

export default GridFlexContainer;

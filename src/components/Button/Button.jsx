import React from "react";
import styles from './style.module.scss';
import buttonPropTypes from "./ButtonPropTypes";

export default function Button({
  type = '1', size = 'large', height, width = "fit-content", isDisabled = false, isSelected = false, isHovered = false, label = 'button', ariaLabel = 'button', iconLeft = null, iconRight = null, onClickTask
}) {
  return (
    <button className={styles.button_component} type={type} buttonSize={size} disabled={isDisabled} onClick={onClickTask} aria-label={ariaLabel} isSelected={isSelected.toString()} isHovered={isHovered.toString()}
      style={{
        width: width,
        height: height,
      }
      }>
      {iconLeft !== null && <div className={styles.icon}>{iconLeft}</div>}
      {label?.length !== 0 && <div className={styles.label}>{label}</div>}
      {iconRight !== null && <div className={styles.icon}>{iconRight}</div>}
    </button >
  );
}
Button.propTypes = buttonPropTypes;
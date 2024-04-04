
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';

export const ColorBox = ({ colorHex, colorName }) => {
  const colorRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (colorRef.current) {
      const computedStyle = window.getComputedStyle(colorRef.current);
      const rgbColor = computedStyle.backgroundColor;
      const { success, hex } = rgbToHex(rgbColor);
      setBackgroundColor(success ? hex : rgbColor);
    }
  }, [colorRef]);

  const rgbToHex = (rgbColor) => {
    try {
      const hexColor = rgbColor.replace(/^rgb\(|\s+|\)$/g, '').split(',');
      const hex = '#' + hexColor.map(value => {
        const parsedValue = parseInt(value);
        if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 255) {
          throw new Error('Invalid RGB color');
        }
        const hexValue = parsedValue.toString(16).padStart(2, '0');
        return hexValue;
      }).join('');
      return { success: true, hex };
    } catch (error) {
      return { success: false };
    }
  };

  return (
    <div key={colorName} className={styles.color_box_component}>
      <div
        ref={colorRef}
        className={styles.color_palette}
        style={{
          backgroundColor: colorHex,
        }}
      >
        &nbsp;
      </div>
      <div>
        <div>{colorName.replace(/-/g, ' ')}</div>
        <div>{backgroundColor}</div>
      </div>
    </div>
  );
};

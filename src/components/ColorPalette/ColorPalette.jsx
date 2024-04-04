
import { ColorBox } from '@components/ColorBox/ColorBox';
import styles from './style.module.scss';

export const ColorPalette = ({ colors, colorScales }) => {
  return (
    <div className={styles.color_palette_area}>
      {colors.map(color => {
        return <div className={styles.color_palette_specific_color_area}>{
          colorScales.map(scale => (
            <ColorBox
              key={`${color}-${scale}`}
              colorHex={`var(--${color}-${scale})`}
              colorName={`--${color}-${scale}`}
            />
          ))}</div>
      })}
    </div>
  );
}
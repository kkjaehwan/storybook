import { useState } from 'react';
import styles from './style.module.scss';

const ImageToggleButton = ({ beforeImage, afterImage, onClick }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onClick();
  };

  return (
    <div className={styles.imageToggleButton} onClick={handleToggle}>
      {isToggled ? beforeImage : afterImage}
    </div>
  );
};

export default ImageToggleButton;

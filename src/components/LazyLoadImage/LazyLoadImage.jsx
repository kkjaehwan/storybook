import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './style.module.scss';
import LazyLoadImagePropTypes from './LazyLoadImagePropTypes';
const LazyLoadImage = ({ image }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={styles.lazyloadImage}>
      {!loaded && <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />}
      <img
        src={image.src}
        alt={image.alt}
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={handleLoad}
      />
    </div>
  );
};
LazyLoadImage.propTypes = LazyLoadImagePropTypes;

export default LazyLoadImage;

import React from "react";
import Button from "@components/Button/Button";
import styles from './style.module.scss';
import ImageCardPropTypes from "./ImageCardPropTypes";
import Title from "@components/Title/Title";

const ImageCard = ({ images, title, description, type = 'white' }) => {
  return (
    <article className={styles.card} type={type}>
      <Title title={title} type="default" />
      <div className={styles.card_area}>
        <div className={styles.images}>
          {images.map(image =>
            <div className={styles.image_area}>
              <img className={styles.image} src={image.src} alt={image.alt} />
              <div className={styles.image_title}>{image.title}</div>
            </div>)}
        </div>
        <div className={styles.card_content_body}>
          {description && <div className={styles.card_discription}>
            {description}
          </div>
          }</div></div>
    </article >
  );
};

ImageCard.propTypes = ImageCardPropTypes;

export default ImageCard;

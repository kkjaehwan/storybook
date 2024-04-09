import React from "react";
import Button from "@components/Button/Button";
import styles from './style.module.scss';
import CardPropTypes from "./CardPropTypes";

const Card = ({ image, imgAlt, title, description, buttonsProps, type = 'default' }) => {
  return (
    <article className={styles.card} type={type}>
      <div className={styles.card_body}>
        {image && <img src={image} alt={imgAlt || "Image"} />}
        <div className={styles.card_content_body}>
          {title && <div className={styles.card_title}>
            {title}
          </div>
          }
          {description && <div className={styles.card_discription}>
            {description}
          </div>
          }</div>
      </div>
      <div className={styles.buttons_area}>
        {buttonsProps?.map(buttonProps =>
          <Button {...buttonProps} />
        )}
      </div>

    </article>
  );
};

Card.propTypes = CardPropTypes;

export default Card;

import React from "react";
import Button from "@components/Button/Button";
import styles from './style.module.scss';
import cardPropTypes from "./CardPropTypes";

const Card = ({ image, imgAlt, description, buttonProps }) => {
  return (
    <article className={styles.card}>
      {image && <img src={image} alt={imgAlt || "Image"} />}
      <div className={styles.card_discription}>
        {description}
      </div>
      <Button {...buttonProps} />
    </article>
  );
};

Card.propTypes = cardPropTypes;

export default Card;

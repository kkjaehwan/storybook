import React from "react";
import styles from './style.module.scss';
import GoogleMapPropTypes from "./GoogleMapPropTypes";
import Title from "@components/Title/Title";

const GoogleMap = ({ title = "GoogleMap", address = "290 Bremner Blvd, Toronto, ON M5V 3L9", type = "default", height = "400px", location = '!1m18!1m12!1m3!1d2887.269064359635!2d-79.38963172271337!3d43.6425700531166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1712624537124!5m2!1sen!2sca' }) => {
  return (
    <div className={styles.googlemap} style={{ height: height }}>
      {title && <Title title={title} type={type} />}
      {address && address}
      <iframe src={`https://www.google.com/maps/embed?pb=${location}`}
        width="100%"
        height="100%"
        allowFullScreen title="map"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
GoogleMap.propTypes = GoogleMapPropTypes;

export default GoogleMap;

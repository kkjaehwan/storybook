import React from "react";
import styles from './style.module.scss';
import footerPropTypes from "./FooterPropTypes";
import SocialLinks from "@components/SocialLinks/SocialLinks";

const Footer = ({ logo, socialLinks, copyright }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.logo_area}>
          {logo}
        </div>
        <div className={styles.socials_area}>
          <SocialLinks socials={socialLinks} />
        </div>
      </div>
      <div className={styles.copyright}>
        {copyright}
      </div>
    </footer >
  );
};

Footer.propTypes = footerPropTypes;

export default Footer;

import React from "react";
import styles from './style.module.scss';
import socialLinksPropTypes from "./SocialLinksPropTypes";

const SocialLinks = ({
  socials, gap, colorType = "default", iconSize = 'medium' }) => {
  return (
    <nav className={styles.socialLinks} style={{ gap: gap }}>
      {socials?.map((social) => (
        <div key={social.title} className={styles.social} iconSize={iconSize} colorType={colorType}>
          {social.type === 'callFunc' ? (
            <div onClick={social.onClick}>
              {social.icon}
            </div>
          ) : (
            <a href={`mailto:${social.email}`}>
              {social.icon}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

SocialLinks.propTypes = socialLinksPropTypes;

export default SocialLinks;

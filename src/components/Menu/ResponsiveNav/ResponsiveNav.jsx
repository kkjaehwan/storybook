import React from "react";
import responsiveNavPropTypes from "./ResponsiveNavPropTypes";
import styles from './style.module.scss';
import Nav from "../Nav/Nav";
import HamburgerNav from "../HamburgerNav/HamburgerNav";

const ResponsiveNav = ({ logo,
  pages, widthHorizontal = '200px', heightHorizontal = "50px", widthVertical = '100%', heightVertical = "50px", mainButtonType = "4", subButtonType = "5", activePageKeys }) => {

  return (
    <div className={styles.responsiveNav}>
      <div className={styles.hamburgerNav}><HamburgerNav logo={logo} pages={pages} widthHorizontal={widthHorizontal} heightHorizontal={heightHorizontal} widthVertical={widthVertical} heightVertical={heightVertical} mainButtonType={mainButtonType} subButtonType={subButtonType} activePageKeys={activePageKeys} />
      </div>
      <div className={styles.horizontalNav}><Nav logo={logo} pages={pages} widthHorizontal={widthHorizontal} heightHorizontal={heightHorizontal} widthVertical={widthVertical} heightVertical={heightVertical} mainButtonType={mainButtonType} subButtonType={subButtonType} activePageKeys={activePageKeys} />
      </div>
    </div >
  );
};

export default ResponsiveNav;

ResponsiveNav.propTypes = responsiveNavPropTypes;

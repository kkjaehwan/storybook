import React, { useEffect, useState } from "react";
import hamburgerNavPropTypes from "./HamburgerNavPropTypes";
import Button from "@components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from './style.module.scss';
import Nav from "../Nav/Nav";

const HamburgerNav = ({
  pages, type = 'vertical', widthHorizontal = '200px', heightHorizontal = "50px", widthVertical = '100%', heightVertical = "50px", mainButtonType = "4", subButtonType = "5", activePageKeys }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    };

    handleScroll();

    return () => {
      document.body.style.overflow = 'visible';
    };

  }, [isOpen]);
  const toggleMenu = () => {
    window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerNav} >
      <div className={styles.button_area}>
        <Button onClickTask={toggleMenu} iconLeft={<FontAwesomeIcon icon={faBars} />} label="" type="3" />
      </div>
      {isOpen && (
        <div className={styles.background}>
          <div>
            <div className={styles.button_area}>
              <div></div> <div>Logo</div> <Button onClickTask={toggleMenu} iconLeft={<FontAwesomeIcon icon={faXmark} />} label="" type="3" />
            </div>
            <div className={styles.menu_area}>
              <Nav pages={pages} type={type} widthHorizontal={widthHorizontal} heightHorizontal={heightHorizontal} widthVertical={widthVertical} heightVertical={heightVertical} mainButtonType={mainButtonType} subButtonType={subButtonType} activePageKeys={activePageKeys} />
            </div>
          </div>
        </div>)}
    </div>
  );
};

export default HamburgerNav;

HamburgerNav.propTypes = hamburgerNavPropTypes;

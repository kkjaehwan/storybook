import React, { useState } from "react";
import styles from './style.module.scss';
import navPropTypes from "./NavPropTypes";
import Button from "@components/Button/Button";


const Nav = ({
  pages, type = 'horizontal', widthHorizontal = '200px', heightHorizontal = "50px", widthVertical = '100%', heightVertical = "50px", mainButtonType = "4", subButtonType = "5", activePageKeys }) => {

  return (
    <nav >
      <ul className={`${styles.nav} `} type={type}>
        {pages.map((page, index) => {

          const [hoveredIndex, setHoveredIndex] = useState(null);

          const handleMouseEnter = (index) => {
            setHoveredIndex(index);
          };

          const handleMouseLeave = () => {
            setHoveredIndex(null);
          };
          return (
            <li key={page.key} className={styles.first_level} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} isSelected={activePageKeys?.includes(page.key).toString()}>
              <Button type={mainButtonType} width={type === 'horizontal' ? widthHorizontal : widthVertical} height={type === 'horizontal' ? heightHorizontal : heightVertical} isSelected={activePageKeys?.includes(page.key)} isHovered={hoveredIndex === index} label={page.name} onClickTask={() => { alert("link to " + page.path) }} />
              {page?.sub?.length > 0 && (
                <div className={styles.dropdown_content}>
                  <ul className={styles.dropdown}>
                    {page.sub
                      .map((page, i) => {
                        return (
                          <li>
                            <Button type={subButtonType} width={type === 'horizontal' ? widthHorizontal : widthVertical} height={type === 'horizontal' ? heightHorizontal : heightVertical} isSelected={activePageKeys?.includes(page.key)} label={page.name} onClickTask={() => { alert("link to " + page.path) }} />
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav >
  );
};

export default Nav;

Nav.propTypes = navPropTypes;
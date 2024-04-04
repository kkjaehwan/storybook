import React from "react";
import styles from './style.module.scss';
import navPropTypes from "./NavPropTypes";
import Button from "@components/Button/Button";


const Nav = ({
  pages, width = '200px', height = "50px", mainButtonType = "4", subButtonType = "5", activePageKeys }) => {
  return (
    <nav >
      <ul className={`${styles.nav} `}>
        {pages.map((page) => {
          return (
            <li key={page.key} className={styles.first_level}>
              <Button type={mainButtonType} width={width} height={height} isSelected={activePageKeys?.includes(page.key)} label={page.name} onClickTask={() => { alert("link to " + page.path) }} />
              {page?.sub?.length > 0 && (
                <div className={styles.dropdown_content}>
                  <ul className={styles.dropdown}>
                    {page.sub
                      .map((page, i) => {
                        return (
                          <li>
                            <Button type={subButtonType} width={width} height={height} isSelected={activePageKeys?.includes(page.key)} label={page.name} onClickTask={() => { alert("link to " + page.path) }} />
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
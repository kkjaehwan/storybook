import React from "react";
import styles from './style.module.scss';
import layoutPropTypes from "./LayoutPropTypes";

export default function Layout({ header,
  children, footer }) {
  return (
    <html lang="en">
      <body className={styles.component}>
        <header className={styles.header}>
          {header ? header : <div style={{ textAlign: 'center', width: '100%' }}>header area</div>}
        </header>
        <main className={styles.main}>
          {children ? children : 'children area'}
        </main>
        <footer className={styles.footer}>
          {footer ? footer : 'footer area'}
        </footer>
      </body>
    </html>
  );
}
Layout.propTypes = layoutPropTypes;
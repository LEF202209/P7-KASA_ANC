import React from 'react';
import styles from './Global.css';

const GlobalStyle = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default GlobalStyle;
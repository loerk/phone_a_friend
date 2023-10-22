import styles from './HomePage.module.css';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

export default function HomePage() {
  const [data] = useState({});
  const { state } = useLocation();
  console.log(' from homepage.js state ', state);
  console.log(' from homepage.js data', data);
  return (
    <>
      <div className={styles.center}>
        <span className={styles.largeIcon}>account_circle</span>

        <div className={styles.mainTitle}>
          <h1>Phone A Friend</h1>
        </div>
        <div className={styles.iconContainer}></div>
        <div className="iconContainer">
          <div>
            <Link to="/friendgroup">
              <span className={styles.medIcon}>group</span>
            </Link>
          </div>
          <div>
            <Link to="/phonecall" state={{ userInfo: state.response.data }}>
              <span className={styles.medIcon}>add_call</span>
            </Link>
          </div>
          <div>
            <Link to="/calendar">
              <span className={styles.medIcon}>calendar_add_on</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

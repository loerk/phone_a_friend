import styles from './HomePage.module.css';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/fetcher';

const buttonStyles = {
  padding: '1.2rem',
  margin: '1rem',
  border: '1px solid black',
  background: 'transparent',
  borderRadius: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const containerStyles = {
  display: 'flex'
};

export default function HomePage() {
  const { state } = useLocation();

  const [status, setStatus] = useState('available');
  useEffect(() => {
    const saveStatus = async () => {
      try {
        fetchData(`/api/users/${state._id}/status`, 'POST', { status });
      } catch (error) {
        console.log(error);
      }
    };
    saveStatus();
  }, [status]);
  return (
    <>
      <div className={styles.center}>
        <div className={styles.subTitle}></div>
        <div className={styles.subTitle}>
          <h4>Select a status</h4>
        </div>
        <div style={{ ...containerStyles }}>
          <button
            style={{
              ...buttonStyles,
              background: status === 'available' ? 'rosyBrown' : 'transparent',
              color: status === 'available' ? 'black' : 'white'
            }}
            onClick={() => setStatus('available')}
          >
            <span className={styles.largeIcon}>account_circle</span>
            Available
          </button>
          <button
            style={{
              ...buttonStyles,
              background: status === 'unavailable' ? 'rosyBrown' : 'transparent',
              color: status === 'unavailable' ? 'black' : 'white'
            }}
            onClick={() => setStatus('unavailable')}
          >
            <span className={styles.largeIcon}>block</span>
            Unavailable
          </button>
          <button
            style={{
              ...buttonStyles,
              background: status === 'moody' ? 'rosyBrown' : 'transparent',
              color: status === 'moody' ? 'black' : 'white'
            }}
            onClick={() => setStatus('moody')}
          >
            <span className={styles.largeIcon}>sentiment_sad</span>
            Need a call
          </button>
        </div>
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
            <Link to="/phonecall" state={{ userInfo: state }}>
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

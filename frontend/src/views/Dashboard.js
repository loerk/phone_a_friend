import styles from '../styles/Dashboard.module.css';
import { PassageAuthGuard } from '@passageidentity/passage-react';
import { usePassageUserInfo } from '../hooks/';
import LogoutButton from '../components/LogoutButton';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import FriendGroup from './FriendGroup';

function Dashboard() {
  const { userInfo, loading } = usePassageUserInfo();

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <div className={styles.title}>Loading</div>
      </div>
    );
  }

  return (
    <PassageAuthGuard
      unAuthComp={
        <div className={styles.dashboard}>
          <div className={styles.title}>you must be logged in</div>
          <div className={styles.message}>
            <a href="/">Login</a>
          </div>
        </div>
      }
    >
      <div className={styles.dashboard}>
      <span class="material-symbols-outlined">
        account_circle
      </span>
        <div className={styles.title}>Welcome</div>
        <p>to</p>
        <div className={styles.title}>Phone a Friend!</div>
        <div>
          <span class="material-symbols-outlined" >
            group
          </span>
          <span class="material-symbols-outlined">
            add_call
          </span>
          <span class="material-symbols-outlined">
            calendar_add_on
          </span>
        </div>
        <br />
        <div className={styles.message}>
          You successfully signed in with Passage. Your username is: {userInfo?.email}
        </div>
        <LogoutButton />
        
      </div>
    </PassageAuthGuard>
  );
}

export default Dashboard;

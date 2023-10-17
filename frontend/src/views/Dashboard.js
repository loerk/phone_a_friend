import styles from '../styles/Dashboard.module.css';
import { PassageAuthGuard } from '@passageidentity/passage-react';
import { usePassageUserInfo } from '../hooks/';
import LogoutButton from '../components/LogoutButton';
import { Routes, Route, Link } from 'react-router-dom';
import FriendGroup from './FriendGroup';
import Calendar from './Calendar';


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
      <span className="material-symbols-outlined">
        account_circle
      </span>
        <div className={styles.title}>Welcome</div>
        <p>to</p>
        <div className={styles.title}>Phone a Friend!</div>
        <div>
          <Link to="/friendgroup">
            <img src="../images/group.png"></img>
          </Link>
          <Link to="/friendgroup">
            <img src="../images/add_call.png"></img>
          </Link>
          <Link to="/calendar">
            <img src="../images/calendar.png"></img>
          </Link>
        </div>
        <br />
        <div className={styles.message}>
          You successfully signed in with Passage. Your username is: {userInfo?.email}
        </div>
        <LogoutButton />
        
        <Routes>
          <Route path='friendgroup' element={<FriendGroup />} />
          <Route path='calendar' element={<Calendar />} />
        </Routes>
      
      </div>
      
    </PassageAuthGuard>
  );
}

export default Dashboard;

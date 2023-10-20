import styles from '../styles/Dashboard.module.css';
import { PassageAuthGuard } from '@passageidentity/passage-react';
import { usePassageUserInfo } from '../hooks';
import { RegistrationForm } from '../components/Registration/RegistrationForm';
import { AudioExample } from '../components/Audio Calls/AudioExample';

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
    <>
      {!userInfo ? (
        <PassageAuthGuard
          unAuthComp={
            <div className={styles.dashboard}>
              <div className={styles.title}>you must be logged in</div>
              <div className={styles.message}>
                <a href="/">Login</a>
              </div>
            </div>
          }
        />
      ) : (
        <div className={styles.dashboard}>
          <div className={styles.title}>GET STARTED</div>
          <div className={styles.message}>Please Answer a few questions</div>
          <RegistrationForm />
          <AudioExample />
        </div>
      )}
    </>
  );
}

export default Dashboard;

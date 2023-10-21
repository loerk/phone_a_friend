import { Link } from 'react-router-dom';
import styles from '../styles/Banner.module.css';
import LogoutButton from './LogoutButton';
import { usePassageUserInfo } from '../hooks';

function Banner() {
  const { userInfo } = usePassageUserInfo();

  return (
    <div className={styles.mainHeader}>
      <Link style={{ textDecoration: 'none' }} className={styles.headerText} to={'/homepage'}>
        HOME
      </Link>
      <div className={styles.spacer}></div>

      {userInfo && (
        <>
          <Link style={{ textDecoration: 'none', padding: '2rem' }} to={'/profile'}>
            Profile
          </Link>
          <LogoutButton />
        </>
      )}
    </div>
  );
}
export default Banner;

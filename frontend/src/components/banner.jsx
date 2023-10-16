import { Link } from 'react-router-dom';
import styles from '../styles/Banner.module.css';
import LogoutButton from './LogoutButton';
import { usePassageUserInfo } from '../hooks';

function Banner() {
  const { userInfo } = usePassageUserInfo();
  console.log(userInfo);
  return (
    <div className={styles.mainHeader}>
      <div className={styles.headerText}>Phone A Friend</div>
      <div className={styles.spacer}></div>

      {userInfo && (
        <>
          <Link to={'/profile'}>Profile</Link>
          <LogoutButton />
        </>
      )}
    </div>
  );
}
export default Banner;

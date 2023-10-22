import styles from './FriendGroup.module.css';
import { Link } from 'react-router-dom';

export default function FriendGroup() {
  return (
    <>
      <div className={styles.center}>
        <div>
          <h1 className={styles.mainTitle}>Friend Group</h1>
        </div>
        <div className={styles.right}>
          <Link to="/search">
            <span className={styles.medIcon}>person_add</span>
          </Link>
        </div>
        <div className={styles.friendContainer}>
          <div>
            <span className={styles.smallIcon}>account_circle</span>
          </div>
          <div className={styles.nameContainer}>
            <div>Emily Cooper</div>
          </div>
          <div className={styles.iconContainer}>
            <Link to="/edit">
              <span className={styles.smallIcon}>edit</span>
            </Link>
            <span className={styles.smallIcon}>block</span>
            <span className={styles.smallIcon}>delete</span>
          </div>
        </div>
        <div className={styles.friendContainer}>
          <div>
            <span className={styles.smallIcon}>account_circle</span>
          </div>
          <div className={styles.nameContainer}>
            <div>Gabriel Cadault</div>
          </div>
          <div className={styles.iconContainer}>
            <Link to="/edit">
              <span className={styles.smallIcon}>edit</span>
            </Link>
            <span className={styles.smallIcon}>block</span>
            <span className={styles.smallIcon}>delete</span>
          </div>
        </div>
        <div className={styles.friendContainer}>
          <div>
            <span className={styles.smallIcon}>account_circle</span>
          </div>
          <div className={styles.nameContainer}>
            <div>Mindy Chen</div>
          </div>
          <div className={styles.iconContainer}>
            <Link to="/edit">
              <span className={styles.smallIcon}>edit</span>
            </Link>
            <span className={styles.smallIcon}>block</span>
            <span className={styles.smallIcon}>delete</span>
          </div>
        </div>
        <div className={styles.friendContainer}>
          <div>
            <span className={styles.smallIcon}>account_circle</span>
          </div>
          <div className={styles.nameContainer}>
            <div>Alfie Lambert</div>
          </div>
          <div className={styles.iconContainer}>
            <Link to="/edit">
              <span className={styles.smallIcon}>edit</span>
            </Link>
            <span className={styles.smallIcon}>block</span>
            <span className={styles.smallIcon}>delete</span>
          </div>
        </div>
      </div>
    </>
  );
}

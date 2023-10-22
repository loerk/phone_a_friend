import styles from './CalendarEdit.module.css';
import { Link } from 'react-router-dom';

export default function CalendarEdit() {
  return (
    <>
      <div className={styles.center}>
        <div>
          <h1 className={styles.mainTitle}>Edit Availability</h1>
        </div>
        <div className={styles.right}>
          <Link to="/calendar" className={styles.link}>
            <h1 className={styles.medLink}>Done</h1>
          </Link>
        </div>
        <br />
        <br />
        <div className={styles.timeContainer}>
          <div>
            <Link to="/calendaradd">
              <span className={styles.smallIcon}>edit</span>
            </Link>
          </div>
          <div>
            <div className={styles.day}>Monday</div>
          </div>
          <div className={styles.timeContainer}>
            <div className={styles.time}>
              7:00<span className={styles.day}>AM</span>
            </div>
            <div className={styles.day}>to</div>
            <div className={styles.time}>
              9:00<span className={styles.day}>AM</span>
            </div>
          </div>
        </div>
        <div className={styles.timeContainer}>
          <div>
            <Link to="/calendaradd">
              <span className={styles.smallIcon}>edit</span>
            </Link>
          </div>
          <div>
            <div className={styles.day}>Tuesday</div>
          </div>
          <div className={styles.timeContainer}>
            <div className={styles.time}>
              8:00<span className={styles.day}>PM</span>
            </div>
            <div className={styles.day}>to</div>
            <div className={styles.time}>
              10:00<span className={styles.day}>PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

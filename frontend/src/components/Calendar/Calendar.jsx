import styles from './Calendar.module.css'
import { Link } from 'react-router-dom'
import CalendarEdit from '../CalendarEdit/CalendarEdit'
import CalendarAdd from '../CalendarAdd/CalendarAdd'

export default function Calendar() {

  return (
    <>
      <div className={styles.center}>
        <div>
          <h1 className={styles.mainTitle}>My Availability</h1>
        </div>
        <div className={styles.iconContainer}>
          <Link to="/calendaredit" className={styles.link}>
            <h1 className={styles.medLink}>Edit</h1>
          </Link>
          <Link to="/calendaradd">
            <span className={styles.medIcon}>
              add
            </span>
          </Link>
        </div>
        <br />
        <br />
        <div className={styles.timeContainer}>
          <div>
            <div className={styles.day}>Monday</div>
          </div>
          <div className={styles.timeContainer}>
            <div className={styles.time}>7:00<span className={styles.day}>AM</span></div>
            <div className='to'>to</div>
            <div className={styles.time}>9:00<span className={styles.day}>AM</span></div>
          </div>
          <div>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
        <div className={styles.timeContainer}>
          <div>
            <div className={styles.day}>Tuesday</div>
          </div>
          <div className={styles.timeContainer}>
            <div className={styles.time}>8:00<span className={styles.day}>PM</span></div>
            <div className='to'>to</div>
            <div className={styles.time}>10:00<span className={styles.day}>PM</span></div>
          </div>
          <div>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>        
      </div>
      
    </>
  )
}
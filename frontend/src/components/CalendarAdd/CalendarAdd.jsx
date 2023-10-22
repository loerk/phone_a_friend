import styles from './CalendarAdd.module.css'
import { Link } from 'react-router-dom'
import Calendar from '../Calendar/Calendar'

export default function CalendarAdd() {

  return (
    <>
      <div className={styles.center}>
        <div>
          <h1 className={styles.mainTitle}>Availability</h1>
        </div>
        <div className={styles.iconContainer}>
          <Link to="/calendar">
            <span className={styles.medIcon}>
              cancel
            </span>
          </Link>
          <Link to="/calendar">
          <span className={styles.medIcon}>
              save
            </span>
          </Link>         
        </div>
        <div className={styles.selectContainer}>
          <div>
            <div className={styles.calDay}>Sunday</div>
            <div className={styles.calDay}>Monday</div>
            <div className={styles.calDaySel}>Tuesday</div>
            <div className={styles.calDay}>Wednesday</div>
            <div className={styles.calDay}>Thursday</div>
          </div>
        </div>
        <br />
        <div className={styles.selectContainer}>
          <div className={styles.selectContainer}>
            <div>            
              <div className={styles.calTime}>5:00</div>                        
              <div className={styles.calTime}>6:00</div>                        
              <div className={styles.calTimeSel}>7:00</div>                        
              <div className={styles.calTime}>8:00</div>                        
              <div className={styles.calTime}>9:00</div>
            </div>                        
          </div>
          <div className={styles.selectContainer}>
            <div>
              <div className={styles.ampm}>AM</div>
              <div className={styles.ampmSel}>PM</div>
              <br />
              <br />
            </div>
          </div>
          <div><div className={styles.calTo}>to</div></div>
          <div className={styles.selectContainer}>
            <div>            
              <div className={styles.calTime}>7:00</div>                        
              <div className={styles.calTime}>8:00</div>                        
              <div className={styles.calTimeSel}>9:00</div>                        
              <div className={styles.calTime}>10:00</div>                        
              <div className={styles.calTime}>11:00</div>
            </div>                        
          </div>
          <div className={styles.selectContainer}>
            <div>
              <div className={styles.ampm}>AM</div>
              <div className={styles.ampmSel}>PM</div>
              <br />
              <br />
            </div>
          </div>
        </div>    
      </div>      
    </>
  )
}
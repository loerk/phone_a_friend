import styles from './HomePage.module.css'
// import Account from '../../images/account.png'
// import AddCall from '../../images/add_call.png'
// import Calendar from '../../images/calendar.png'
import { Link } from 'react-router-dom'
// import FriendGroup from '../FriendGroup/FriendGroup'
// import PhoneCall from '../PhoneCall/PhoneCall'
// import Calendar from '../Calendar/Calendar'

export default function HomePage() {

  return (
    <>
      
        <div className={styles.center}>
          <span className={styles.largeIcon}>
            account_circle
          </span>
        
        <div className={styles.mainTitle}>
          <h1>Phone A Friend</h1>
        </div> 
        <div className={styles.iconContainer}>
          <div>
            <Link to="/friendgroup">
              <span className={styles.medIcon}>
                group
              </span>
            </Link>      
          </div>
          <div>
            <Link to="/phonecall">
              <span className={styles.medIcon}>
                add_call
              </span>
            </Link>      
          </div>
          <div>
            <Link to="/calendar">
              <span className={styles.medIcon}>
                calendar_add_on
              </span>
            </Link>      
          </div>
        </div>
        </div>
    </>
  );
}
import styles from './Edit.module.css'
import { Link } from 'react-router-dom'
import FriendGroup from '../FriendGroup/FriendGroup'

export default function Edit() {

  return (
    <>
      <div className={styles.center}>
        <div >
          <h1 className={styles.mainTitle}>Edit</h1>
        </div>
        <div className={styles.container}>          
          <div className={styles.right}>
            <Link to="/friendgroup">
              <span className={styles.smallIcon}>
                save
              </span>
            </Link>
            <Link to="/friendgroup">
              <span className={styles.smallIcon}>
                cancel
              </span>
            </Link>
          </div>
          <div>
            <div className={styles.nameContainer}>
              <div className={styles.title}>Name: </div>
              <div className={styles.entry}>Emily Cooper</div>
            </div>
            <div className={styles.nameContainer}>
              <div className={styles.title}>Email: </div>
              <div className={styles.entry}>emily@email.com</div>
            </div>
            <div className={styles.nameContainer}>
              <div className={styles.title}>Phone: </div>
              <div className={styles.entry}>(213) 456-7890</div>
            </div>
          </div>
        </div>       
      </div>
    </>
  )
}
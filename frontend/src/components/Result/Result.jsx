import styles from './Result.module.css';
import { Link } from 'react-router-dom';

export default function Result() {
  return (
    <>
      <div className={styles.center}>
        <div>
          <h1 className={styles.mainTitle}>Results</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.right}>
            <Link to="/friendgroup">
              <span className={styles.smallIcon}>save</span>
            </Link>
            <Link to="/friendgroup">
              <span className={styles.smallIcon}>cancel</span>
            </Link>
          </div>
          <div>
            <div className={styles.nameContainer}>
              <div className={styles.title}>Name: </div>
              <div className={styles.entry}>Emily Cooper</div>
            </div>
            <div className={styles.nameContainer}>
              <div className={styles.title}>Info: </div>
              <div className={styles.entry}>
                <p>New York</p>
                <p>Digital Content Creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

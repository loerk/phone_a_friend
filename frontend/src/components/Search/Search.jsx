import styles from './Search.module.css';
import { Link } from 'react-router-dom';

export default function Search() {
  return (
    <>
      <div className={styles.center}>
        <div>
          <h1 className={styles.mainTitle}>Search</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.right}>
            <Link to="/result">
              <span className={styles.smallIcon}>search</span>
            </Link>
          </div>
          <div>
            <div className={styles.nameContainer}>
              <div className={styles.title}>Name: </div>
              <div className={styles.entry}></div>
            </div>
            <div className="editNameContainer">
              <div className={styles.title}>Email: </div>
              <div className={styles.entry}>emily@email.com</div>
            </div>
            <div className="editNameContainer">
              <div className={styles.title}>Phone: </div>
              <div className={styles.entry}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

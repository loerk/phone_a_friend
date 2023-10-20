import styles from '../styles/Dashboard.module.css';
import { useState } from 'react';

function AddFriend() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  return (
    <div className={styles.dashboard}>
    <div className={styles.title}>Your Friend Group</div>
    <form>
      <label>Name
        <input type='text'
        value={name} />
      </label>
      <label>Name
        <input type='text'
        value={email} />
      </label>
      <label>Name
        <input type='text'
        value={phone} />
      </label>
    </form>

    </div>
  )
}
import styles from '../styles/Dashboard.module.css';
import './Home.css'
import { Link } from 'react-router-dom'
import Edit from '../Edit/Edit'
import Search from '../Search/Search'

export default function FriendGroup() {

  return (
    <>
      <div>
        <div>
          <h1 className='maintitle'>Friend Group</h1>
        </div>
        <div className='addContainer'>
          <Link to="/search">
          <span className="homeIcon material-symbols-outlined">
            person_add
          </span>
          </Link>
        </div>
        <br />
        <br />
        <div className='friendContainer'>
          <div>
            <span className="greenIcon material-symbols-outlined">
              favorite
            </span>
          </div>
          <div className='nameContainer'>
            <div className='time'>Emily Cooper</div>
          </div>
          <div className='addContainer'>
            <Link to="/edit">
            <span className="friendIcon material-symbols-outlined">
              edit
            </span>
            </Link>
            <span className="friendIcon material-symbols-outlined">
              block
            </span>
            <span className="friendIcon material-symbols-outlined">
              delete
            </span>
          </div>
        </div>
        <div className='friendContainer'>
          <div>
            <span className="redIcon material-symbols-outlined">
              account_circle
            </span>
          </div>
          <div className='nameContainer'>
            <div className='time'>Gabriel Cadault</div>
          </div>
          <div className='addContainer'>
            <span className="friendIcon material-symbols-outlined">
              edit
            </span>
            <span className="friendIcon material-symbols-outlined">
              block
            </span>
            <span className="friendIcon material-symbols-outlined">
              delete
            </span>
          </div>
        </div>
        <div className='friendContainer'>
          <div>
            <span className="redIcon material-symbols-outlined">
              favorite
            </span>
          </div>
          <div className='nameContainer'>
            <div className='time'>Mindy Chen</div>
          </div>
          <div className='addContainer'>
            <span className="friendIcon material-symbols-outlined">
              edit
            </span>
            <span className="friendIcon material-symbols-outlined">
              block
            </span>
            <span className="friendIcon material-symbols-outlined">
              delete
            </span>
          </div>
        </div>
        <div className='friendContainer'>
          <div>
            <span className="greenIcon material-symbols-outlined">
              account_circle
            </span>
          </div>
          <div className='nameContainer'>
            <div className='time'>Alfie Lambert</div>
          </div>
          <div className='addContainer'>
            <span className="friendIcon material-symbols-outlined">
              edit
            </span>
            <span className="friendIcon material-symbols-outlined">
              block
            </span>
            <span className="friendIcon material-symbols-outlined">
              delete
            </span>
          </div>
        </div>        
      </div>
    </>
  )
}

import './Home.css'
import { Link } from 'react-router-dom'
import FriendGroup from '../FriendGroup/FriendGroup'

export default function Result() {

  return (
    <>
      <div>
        <div>
          <h1 className='maintitle'>Results</h1>
        </div>
        <div className='resultContainer'>
        <div className='editBtnContainer'>
            <Link to="/friendgroup">
            <span className="friendIcon material-symbols-outlined">
              save
            </span>
            </Link>
            <Link to="/friendgroup">
            <span className="friendIcon material-symbols-outlined">
              cancel
            </span>
            </Link>
          </div>
          <div>
            <div className='editNameContainer'>
              <div className='title'>Name: </div>
              <div className='entry'>Emily Cooper</div>
            </div>
            <div className='editNameContainer'>
              <div className='title'>Info: </div>
              <div className='entry'>
                <p>New York</p>
                <p>Digital Marketing Executive</p>
              </div>
            </div>
          </div>
        </div>       
      </div>
    </>
  )
}
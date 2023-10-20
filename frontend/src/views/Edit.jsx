import './Home.css'
import { Link } from 'react-router-dom'
import FriendGroup from '../FriendGroup/FriendGroup'

export default function Edit() {

  return (
    <>
      <div>
        <div>
          <h1 className='maintitle'>Edit</h1>
        </div>
        <div className='frEditContainer'>
          
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
              <div className='title'>Email: </div>
              <div className='entry'>emily@email.com</div>
            </div>
            <div className='editNameContainer'>
              <div className='title'>Phone: </div>
              <div className='entry'>(213) 456-7890</div>
            </div>
          </div>
        </div>       
      </div>
    </>
  )
}
import '../HomePage/HomePage.css'
import { Link } from 'react-router-dom'
import Result from '../Result/Result'

export default function Search() {

  return (
    <>
      <div>
        <div>
          <h1 className='maintitle'>Search</h1>
        </div>
        <div className='frEditContainer'>
          
          <div className='editBtnContainer'>
            <Link to="/result">
            <span className="friendIcon material-symbols-outlined">
              search
            </span>
            </Link>
          </div>
          <div>
            <div className='editNameContainer'>
              <div className='title'>Name: </div>
              <div className='entry'></div>
            </div>
            <div className='editNameContainer'>
              <div className='title'>Email: </div>
              <div className='entry'>emily@email.com</div>
            </div>
            <div className='editNameContainer'>
              <div className='title'>Phone: </div>
              <div className='entry'></div>
            </div>
          </div>
        </div>       
      </div>
    </>
  )
}
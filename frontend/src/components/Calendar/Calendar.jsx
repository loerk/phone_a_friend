import '../HomePage/HomePage.css'
import { Link } from 'react-router-dom'
import CalendarEdit from '../CalendarEdit/CalendarEdit'
import CalendarAdd from '../CalendarAdd/CalendarAdd'

export default function Calendar() {

  return (
    <>
      <div>
        <div>
          <h1 className='maintitle'>My Availability</h1>
        </div>
        <div className='editContainer'>
          <Link to="/calendaredit" style={{ textDecoration: 'none' }}>
            <h1 className='editIcon'>Edit</h1>
          </Link>
          <Link to="/calendaradd">
            <span className="homeIcon material-symbols-outlined">
              add
            </span>
          </Link>
        </div>
        <br />
        <br />
        <div className='iconContainer'>
          <div>
            <div className='day'>Monday</div>
          </div>
          <div className='iconContainer'>
            <div className='time'>7:00<span className='day'>AM</span></div>
            <div className='to'>to</div>
            <div className='time'>9:00<span className='day'>AM</span></div>
          </div>
          <div>
            <label className='switch'>
              <input type="checkbox" />
              <span className='slider round'></span>
            </label>
          </div>
        </div>
        <div className='iconContainer'>
          <div>
            <div className='day'>Tuesday</div>
          </div>
          <div className='iconContainer'>
            <div className='time'>8:00<span className='day'>PM</span></div>
            <div className='to'>to</div>
            <div className='time'>10:00<span className='day'>PM</span></div>
          </div>
          <div>
            <label className='switch'>
              <input type="checkbox" />
              <span className='slider round'></span>
            </label>
          </div>
        </div>        
      </div>
      
    </>
  )
}
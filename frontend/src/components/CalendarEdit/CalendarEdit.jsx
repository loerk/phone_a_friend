import '../HomePage/HomePage.css'
import { Link } from 'react-router-dom'
import Calendar from '../Calendar/Calendar'
import CalendarAdd from '../CalendarAdd/CalendarAdd'

export default function CalendarEdit() {

  return (
    <>
      <div>
        <div>
          <h1 className='maintitle'>Edit Availability</h1>
        </div>
        <div className='editContainer' style={{ position: 'relative', left: '300px' }}>
          <Link to="/calendar" style={{ textDecoration: 'none' }}>
            <h1 className='editIcon'>Done</h1> 
          </Link>       
        </div>
        <br />
        <br />
        <div className='iconContainer'>
          <div>
            <Link to='/calendaradd'>
              <span className="homeIcon material-symbols-outlined">
                edit
              </span>
            </Link>
          </div>
          <div>
            <div className='day'>Monday</div>
          </div>
          <div className='iconContainer'>
            <div className='time'>7:00<span className='day'>AM</span></div>
            <div className='day'>to</div>
            <div className='time'>9:00<span className='day'>AM</span></div>
          </div>
        </div>
        <div className='iconContainer'>
          <div>
            <Link to='/calendaradd'>
              <span className="homeIcon material-symbols-outlined">
                edit
              </span>
            </Link>
          </div>
          <div>
            <div className='day'>Tuesday</div>
          </div>
          <div className='iconContainer'>
            <div className='time'>8:00<span className='day'>PM</span></div>
            <div className='day'>to</div>
            <div className='time'>10:00<span className='day'>PM</span></div>
          </div>
          
        </div>        
      </div>
      
    </>
  )
}
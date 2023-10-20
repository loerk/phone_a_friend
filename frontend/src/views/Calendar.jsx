import './Home.css'

export default function Calendar() {

  return (
    <>
      <div>
        <div>
          <h1 className='maintitle'>My Availability</h1>
        </div>
        <div className='editContainer'>
          <h1 className='editIcon'>Edit</h1>
          <span className="homeIcon material-symbols-outlined">
            add
          </span>
        </div>
        <br />
        <br />
        <div className='iconContainer'>
          <div>
            <div className='day'>Monday</div>
          </div>
          <div className='iconContainer'>
            <div className='time'>7:00<span className='day'>AM</span></div>
            <div className='day'>to</div>
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
            <div className='day'>to</div>
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
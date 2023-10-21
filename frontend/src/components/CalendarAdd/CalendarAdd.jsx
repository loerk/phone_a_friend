import '../HomePage/HomePage.css';
import { Link } from 'react-router-dom';
//import Calendar from '../Calendar/Calendar';

export default function CalendarAdd() {
  return (
    <>
      <div>
        <div>
          <h1 className="maintitle">Availability</h1>
        </div>
        <div className="editContainer">
          <Link to="/calendar">
            <span className="homeIcon material-symbols-outlined">cancel</span>
          </Link>
          <Link to="/calendar">
            <span className="homeIcon material-symbols-outlined">save</span>
          </Link>
        </div>
        <div className="iconContainer">
          <div>
            <div className="calDay">Sunday</div>
            <div className="calDay">Monday</div>
            <div className="calDaySel">Tuesday</div>
            <div className="calDay">Wednesday</div>
            <div className="calDay">Thursday</div>
          </div>
        </div>
        <br />
        <div className="iconContainer">
          <div className="iconContainer">
            <div>
              <div className="calTime">5:00</div>
              <div className="calTime">6:00</div>
              <div className="calTimeSel">7:00</div>
              <div className="calTime">8:00</div>
              <div className="calTime">9:00</div>
            </div>
          </div>
          <div className="iconContainer">
            <div>
              <div className="ampm">AM</div>
              <div className="ampmSel">PM</div>
              <br />
              <br />
            </div>
          </div>
          <div>
            <div className="calTo">to</div>
          </div>
          <div className="iconContainer">
            <div>
              <div className="calTime">7:00</div>
              <div className="calTime">8:00</div>
              <div className="calTimeSel">9:00</div>
              <div className="calTime">10:00</div>
              <div className="calTime">11:00</div>
            </div>
          </div>
          <div className="iconContainer">
            <div>
              <div className="ampm">AM</div>
              <div className="ampmSel">PM</div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

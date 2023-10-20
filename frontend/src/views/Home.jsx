import { PassageAuth, PassageUnAuthGuard } from '@passageidentity/passage-react';
import { Navigate } from 'react-router-dom';
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <PassageUnAuthGuard authComp={<Navigate to="/dashboard" />}>
      <PassageAuth />
      <div className='container'>
        <div>
          <span className='accountIcon material-symbols-outlined'>
            account_circle
          </span>
        </div>
        <div className='maintitle'>
          <h1>Phone A Friend</h1>
        </div> 
        <div className='iconContainer'>
          <div>
            <Link to="/friendgroup">
              <span className='homeIcon material-symbols-outlined'>
                group
              </span>
            </Link>      
          </div>
          <div>
            <Link to="/phonecall">
              <span className='homeIcon material-symbols-outlined'>
                add_call
              </span>
            </Link>      
          </div>
          <div>
            <Link to="/calendar">
              <span className="homeIcon material-symbols-outlined">
                calendar_add_on
              </span>
            </Link>      
          </div>
        </div>
      </div>
    </PassageUnAuthGuard>
  );
}

export default Home;

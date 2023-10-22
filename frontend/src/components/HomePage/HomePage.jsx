import './HomePage.css';
// import Account from '../../images/account.png'
// import AddCall from '../../images/add_call.png'
// import Calendar from '../../images/calendar.png'
import { Link, useLocation } from 'react-router-dom';
// import FriendGroup from '../FriendGroup/FriendGroup'
import PhoneCall from '../PhoneCall/PhoneCall';
import React, { useState } from 'react';
// import Calendar from '../Calendar/Calendar'

export default function HomePage() {
  const [data] = useState({});
  const { state } = useLocation();

  console.log('data from homepage.js ', state);
  return (
    <>
      <div className="container">
        <div>
          <span className="accountIcon material-symbols-outlined">account_circle</span>
        </div>
        <div className="maintitle">
          <h1>Phone A Friend</h1>
        </div>
        <div className="iconContainer">
          <div>
            <Link to="/friendgroup">
              <span className="homeIcon material-symbols-outlined">group</span>
            </Link>
          </div>
          <div>
            <PhoneCall userInfo={data}></PhoneCall>
          </div>
          <div>
            <Link to="/calendar">
              <span className="homeIcon material-symbols-outlined">calendar_add_on</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

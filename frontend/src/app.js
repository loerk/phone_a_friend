import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { PassageProvider } from '@passageidentity/passage-react';

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Banner from './components/banner';
import styles from './styles/App.module.css';
import HomePage from './components/HomePage/HomePage';
import FriendGroup from './components/FriendGroup/FriendGroup';
import PhoneCall from './components/PhoneCall/PhoneCall';
import Calendar from './components/Calendar/Calendar';
import Edit from './components/Edit/Edit';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import CalendarEdit from './components/CalendarEdit/CalendarEdit';
import CalendarAdd from './components/CalendarAdd/CalendarAdd';

function App() {
  const navigate = useNavigate()

  return (
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <div>
        <Banner />
        <div className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/homepage" element={<HomePage />}></Route>
            <Route path="/friendgroup" element={<FriendGroup />}></Route>
            <Route path="/phonecall" element={<PhoneCall />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/result" element={<Result />}></Route>
            <Route path="/calendaredit" element={<CalendarEdit />}></Route>
            <Route path="/calendaradd" element={<CalendarAdd />}></Route>
          </Routes>
        </div>
      </div>
    </PassageProvider>
  );
}

export default App;

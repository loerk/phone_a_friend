import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PassageProvider } from '@passageidentity/passage-react';

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Banner from './components/banner';
import styles from './styles/App.module.css';
import FriendGroup from './views/FriendGroup';
import PhoneCall from './views/PhoneCall';
import Calendar from './views/Calendar';
import Edit from './views/Edit';
import Search from './views/Search';
import Result from './views/Result';

function App() {
  return (
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <div>
        <Banner />
        <div className={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path='/home' element={<Home />} />
            <Route path='friendgroup' element={<FriendGroup />}/>
            <Route path='phonecall' element={<PhoneCall />}/>
            <Route path='calendar' element={<Calendar />}/>
            <Route path='edit' element={<Edit />}/>
            <Route path='search' element={<Search />}/>
            <Route path='result' element={<Result />}/>
          </Routes>
        </div>
      </div>
    </PassageProvider>
  );
}

export default App;

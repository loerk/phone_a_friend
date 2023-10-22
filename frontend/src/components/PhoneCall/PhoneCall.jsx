import '../HomePage/HomePage.css';
import '@livekit/components-styles';
const { LiveKitRoom, ControlBar } = require('@livekit/components-react');
import { fetchData } from '../../api/fetcher';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import

const makeCall = async (userId) => {
  console.log('makeCall');
  //const fakeId = '123';
  try {
    const room = await fetchData('/api/room', 'POST', { data: userId });
    console.log('room ', room);
    const roomId = 'happy-frog-dance2'; //room.data.name;
    console.log('userId ', userId);
    let token = await fetchData(`/api/room/join/${roomId}/${userId}`, 'POST');
    console.log('makeCall result ', token);
    if (token) {
      return token;
    } else {
      throw new Error('Get Token Error');
    }
  } catch (error) {
    console.log('Error ', error);
  }
};

export default function PhoneCall() {
  const [token, setToken] = useState('');
  const { state } = useLocation();
  console.log('state ', state);
  console.log('token before useEffect', token);
  //console.log('userInfo from homepage passed to PhoneCall ', userInfo);
  const userId = state?.userInfo?.data?._id;
  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getToken() {
      const token = await makeCall(userId);
      console.log('token after await makecall ', token);
      setToken(token);
      console.log('token after setToken useEffect', token);
    }

    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!token) {
      getToken();
    }
  }, []);

  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6ImhhcHB5LWZyb2ctZGFuY2UyIn0sImlhdCI6MTY5Nzk1MDIyMiwibmJmIjoxNjk3OTUwMjIyLCJleHAiOjE2OTc5NzE4MjIsImlzcyI6ImRldmtleSIsInN1YiI6InVuZGVmaW5lZCIsImp0aSI6InVuZGVmaW5lZCJ9.4z1ry0jmc-TkbLKILOLiC9HvkET8YSgxhOHC-Zv_HKk';
  const wsUrl = 'ws://localhost:7880/';

  console.log('token', token);
  console.log('wsUrl ', wsUrl);
  const friend = 'Mom';
  return (
    // livekit component
    //TrackPublication
    // Track.Source.Microphone
    <div>
      <h1>
        You're on the phone with <i>{friend}</i>!
      </h1>
      <h2>
        Your schedule shows you have <span style={{ color: 'red' }}>5</span> more minutes to chat.
      </h2>
      <h3>Need help hanging up?</h3>
      <ul>
        <i>{friend}</i> - it's been so good talking to you. I have to go soon to [study / work /
        eat]. Thanks so much for talking to me, this was really nice.
      </ul>

      <button className="maintitle">Send a virtual hug and hang up {token}</button>
      <LiveKitRoom
        data-lk-theme="default"
        audio={true}
        video={false}
        token={token}
        serverUrl={wsUrl}
      >
        <ControlBar variation="verbose" />
      </LiveKitRoom>
    </div>
  );
}

import '../HomePage/HomePage.css';
const { LiveKitRoom } = require('@livekit/components-react');
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
  const userId = state?.userInfo?.data?.email;
  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getToken() {
      const data = await makeCall(userId);
      setToken(data);
    }

    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!token) {
      getToken();
    }
  }, []);

  console.log('from PhoneCall.jsx state ', state);
  console.log('makeCall fake call ', makeCall);
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6ImhhcHB5LWZyb2ctZGFuY2UyIn0sImlhdCI6MTY5Nzk1MDIyMiwibmJmIjoxNjk3OTUwMjIyLCJleHAiOjE2OTc5NzE4MjIsImlzcyI6ImRldmtleSIsInN1YiI6InVuZGVmaW5lZCIsImp0aSI6InVuZGVmaW5lZCJ9.4z1ry0jmc-TkbLKILOLiC9HvkET8YSgxhOHC-Zv_HKk';
  const wsUrl = 'ws://localhost:7880/';

  console.log('token', token);
  console.log('wsUrl ', wsUrl);
  return (
    // livekit component
    <div>
      <h1 className="maintitle">Calling...</h1>
      <LiveKitRoom audio={true} video={false} token={token} serverUrl={wsUrl}></LiveKitRoom>
    </div>
  );
}

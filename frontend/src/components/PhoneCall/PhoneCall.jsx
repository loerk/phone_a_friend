import '../HomePage/HomePage.css';
import '@livekit/components-styles';
const { LiveKitRoom, ControlBar } = require('@livekit/components-react');
import { fetchData } from '../../api/fetcher';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import

const makeCall = async (userId) => {
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
  const userId = state?.userInfo?._id;
  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getToken() {
      const token = await makeCall(userId);
      setToken(token);
    }

    if (!token) {
      getToken();
    }
  }, []);

  const livekitHost = process.env.LIVEKIT_HOST;

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

      <button className="maintitle">Send a virtual hug and hang up</button>
      <LiveKitRoom
        data-lk-theme="default"
        audio={true}
        video={false}
        token={token}
        serverUrl={livekitHost}
      >
        <ControlBar variation="verbose" />
      </LiveKitRoom>
    </div>
  );
}

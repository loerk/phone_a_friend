import '../HomePage/HomePage.css';
import '@livekit/components-styles';
import { Track } from 'livekit-client';

const {
  LiveKitRoom,
  ControlBar,
  useTracks,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer
} = require('@livekit/components-react');
import { fetchData } from '../../api/fetcher';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { usePassageUserInfo } from '../../hooks';

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
  const userId = state?.userInfo?.email;
  const { userInfo: passageUserInfo } = usePassageUserInfo();
  const navigate = useNavigate();
  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getToken() {
      if ((userId === '') | (userId === undefined)) {
        console.log('no user id');
        navigate('/dashboard');
      }
      const token = await makeCall(userId);
      setToken(token);
    }

    if (!token) {
      getToken();
    }
  }, []);

  const livekitHost = process.env.REACT_APP_LIVEKIT_HOST;

  const friend = 'Mom';
  return (
    // livekit component
    //TrackPublication
    // Track.Source.Microphone
    <div>
      <h1>Calling...</h1>
      {passageUserInfo && (
        <div>
          <h1>
            You're on the phone with <i>{friend}</i>!
          </h1>
          <h2>
            Your schedule shows you have <span style={{ color: 'red' }}>5</span> more minutes to
            chat.
          </h2>
          <h3>Need help hanging up?</h3>
          <ul>
            <i>{friend}</i> - it's been so good talking to you. I have to go soon to [study / work /
            eat]. Thanks so much for talking to me, this was really nice.
          </ul>

          <button className="maintitle">Send a virtual hug and hang up </button>
          <LiveKitRoom
            data-lk-theme="default"
            audio={true}
            video={false}
            token={token}
            serverUrl={livekitHost}
          >
            {/* Your custom component with basic video conferencing functionality. */}
            <MyVideoConference />
            {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
            <RoomAudioRenderer />
            {/* Controls for the user to start/stop audio, video, and screen 
          share tracks and to leave the room. */}
            <ControlBar variation="verbose" />
          </LiveKitRoom>
        </div>
      )}
    </div>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      // { source: Track.Source.Camera, withPlaceholder: true },
      // { source: Track.Source.ScreenShare, withPlaceholder: false },
      { source: Track.Source.Microphone, withPlaceholder: false }
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(50vh - var(--lk-control-bar-height))' }}>
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}

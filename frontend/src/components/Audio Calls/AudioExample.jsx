import React from 'react';
const { AudioConference, LiveKitRoom, useToken } = require('@livekit/components-react');

export const AudioExample = () => {
  console.log("I'm here in audio example hooray");
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const roomName = params?.get('room') ?? 'test-room';
  const userIdentity = params?.get('user') ?? 'test-identity';

  const token = useToken(process.env.NEXT_PUBLIC_LK_TOKEN_ENDPOINT, roomName, {
    userInfo: {
      identity: userIdentity,
      name: userIdentity
    }
  });

  return (
    <div data-lk-theme="default">
      <LiveKitRoom
        video={false}
        audio={true}
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LK_SERVER_URL}
      >
        <AudioConference />
      </LiveKitRoom>
    </div>
  );
};

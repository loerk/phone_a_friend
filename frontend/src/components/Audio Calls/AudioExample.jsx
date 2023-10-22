import React from 'react';

const { AudioConference, LiveKitRoom } = require('@livekit/components-react');

export const AudioExample = () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6InF1aWNrc3RhcnQtcm9vbSJ9LCJpYXQiOjE2OTc4MzIyNTYsIm5iZiI6MTY5NzgzMjI1NiwiZXhwIjoxNjk3ODUzODU2LCJpc3MiOiJkZXZrZXkiLCJzdWIiOiJxdWlja3N0YXJ0LXVzZXJuYW1lIiwianRpIjoicXVpY2tzdGFydC11c2VybmFtZSJ9.nITclXOuhrbAp8WcT3oiMBS8aED8rNAjEGRsMuYv2dY';

  console.log('token here ', token);

  return (
    <div data-lk-theme="default">
      <LiveKitRoom
        video={false}
        audio={true}
        token={token}
        serverUrl={process.env.REACT_APP_LIVEKIT_HOST}
      >
        <AudioConference />
      </LiveKitRoom>
    </div>
  );
};

const express = require('express');
const router = express.Router();
const livekitServer = require('livekit-server-sdk');


const createToken = () => {
  // if this room doesn't exist, it'll be automatically created when the first
  // client joins
  const roomName = 'quickstart-room';
  // identifier to be used for participant.
  // it's available as LocalParticipant.identity with livekit-client SDK
  const participantName = 'quickstart-username';

  const at = new livekitServer.AccessToken('devkey', 'secret', {
    identity: participantName,
  });
  at.addGrant({ roomJoin: true, room: roomName });
  return at.toJwt();
}

router
  .route('/roomtoken')
  .get((req, res) => {
    res.send(createToken());
  });

module.exports = router;

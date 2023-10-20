const express = require('express');
const router = express.Router();
const livekitServer = require('livekit-server-sdk');

const createToken = (userId) => {
  // if this room doesn't exist, it'll be automatically created when the first
  // client joins
  const roomName = 'quickstart-room';
  // identifier to be used for participant.
  // it's available as LocalParticipant.identity with livekit-client SDK
  const accessToken = new livekitServer.AccessToken('devkey', 'secret', {
    identity: userId,
  });

  accessToken.addGrant({ roomJoin: true, room: roomName });
  return accessToken.toJwt();
}

router
  .route('/roomtoken/:userId')
  .get((req, res) => {
    res.send(createToken(req.params.userId));
  });

module.exports = router;

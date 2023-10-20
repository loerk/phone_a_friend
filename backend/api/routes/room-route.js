const express = require('express');
const router = express.Router();
const livekitServer = require('livekit-server-sdk');

router.route('/').get((req, res) => {
  res.send({ message: 'should return nothing from rooom' });
});

const createToken = (userId, roomId) => {
  // if this room doesn't exist, it'll be automatically created when the first
  // client joins
  // identifier to be used for participant.
  // it's available as LocalParticipant.identity with livekit-client SDK
  const accessToken = new livekitServer.AccessToken('devkey', 'secret', {
    identity: userId
  });

  accessToken.addGrant({ roomJoin: true, room: roomId });
  return accessToken.toJwt();
};

const createRoomId = (participants) => {
  // Create a unique room name for any two participants
  const roomId = participants.sort().join('-');
  return roomId;
};

router.route('/roomtoken/:userId/:roomId').get((req, res) => {
  console.log('creating token ');
  res.send(createToken(req.params.userId, req.params.roomId));
});

router.route('/roomid/:participants').get((req, res) => {
  console.log('creating room ');
  res.send(createRoomId(JSON.parse(req.params.participants)));
});

module.exports = router;

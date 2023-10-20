const express = require('express');
const router = express.Router();
const livekitServer = require('livekit-server-sdk');

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
  const roomId = "-".join(participants.sort());
  return roomId;
};

router.route('/roomtoken/:userId/:roomId').get((req, res) => {
  res.send(createToken(req.params.userId, req.params.roomId));
});

router.route('/roomid/:participants').get((req, res) => {
  res.send(createRoomId(JSON.parse(req.params.participants)));
});

module.exports = router;

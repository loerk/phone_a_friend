const express = require('express');
const router = express.Router();
const { AccessToken, RoomServiceClient } = require('livekit-server-sdk');

const livekitHost = 'ws://localhost:7880';
const roomService = new RoomServiceClient(livekitHost, 'devkey', 'secret');

const opts = {
  name: 'myroom',
  emptyTimeout: 10 * 60, // 10 minutes
  maxParticipants: 20
};
roomService.createRoom(opts).then((room) => {
  console.log('room created', room);
});

router.route('/').get((req, res) => {
  res.send({ message: 'should return nothing from rooom' });
});

const createToken = (userId, roomId) => {
  // if this room doesn't exist, it'll be automatically created when the first
  // client joins
  // identifier to be used for participant.
  // it's available as LocalParticipant.identity with livekit-client SDK
  const accessToken = new AccessToken('devkey', 'secret', {
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

router.route('/getToken/:userId/:roomId').get((req, res) => {
  console.log('creating token ');
  res.send(createToken(req.params.userId, req.params.roomId));
});

router.route('/roomid/:participants').get((req, res) => {
  console.log('creating room ');
  res.send(createRoomId(JSON.parse(req.params.participants)));
});

router.route('/connect/:roomId/:userId').post((req, res) => {
  console.log('POST call room ');
  console.log('req ', req);
  const roomId = req.params?.roomId;
  const userId = req.params?.userId;
  res.send({ roomId: roomId, userId: userId });
});

module.exports = router;

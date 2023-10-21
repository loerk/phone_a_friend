const express = require('express');
const util = require('util');
const router = express.Router();
const { AccessToken, RoomServiceClient } = require('livekit-server-sdk');

const livekitHost = 'ws://localhost:7880';

// const participants = await roomService.listParticipants(opts?.name);
// console.log('participants ', participants);

// roomService.listRooms().then((rooms) => {
//   console.log('existing rooms', rooms);
// });

router.route('/').post(async (req, res) => {
  // main endpoint to make room
  console.log('room post');
  const request = req.body;
  console.log('request data ', request?.data);
  const roomService = new RoomServiceClient(livekitHost, 'devkey', 'secret');

  const opts = {
    name: req.params?.roomId,
    emptyTimeout: 10 * 60, // 10 minutes
    maxParticipants: 2
  };
  res.send({
    message: 'Room created',
    data: await roomService.createRoom(opts).then((room) => {
      console.log('room created', room);
      console.log('util.inspect ', util.inspect(room, false, null, true));
      return room;
    })
  });
});

router.route('/:roomId').delete((req, res) => {
  //Deleting a room causes all Participants to be disconnected.
  const roomService = new RoomServiceClient(livekitHost, 'devkey', 'secret');
  res.send(
    roomService.deleteRoom(req.params?.roomId).then((room) => {
      console.log('room deleted', room);
    })
  );
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

module.exports = router;

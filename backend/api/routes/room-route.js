const express = require('express');
const util = require('util');
const router = express.Router();
const { AccessToken, RoomServiceClient } = require('livekit-server-sdk');

const livekitHost = 'ws://localhost:7880';

// roomService.listRooms().then((rooms) => {
//   console.log('existing rooms', rooms);
// });

router.route('/').post(async (req, res) => {
  // main endpoint to make room
  console.log('room post');
  //console.log('req ', req);
  const roomService = new RoomServiceClient(livekitHost, 'devkey', 'secret');

  const opts = {
    name: 'happy-frog-dance', //'room-' + userId,
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

const joinRoom = async (userId, roomId) => {
  const roomService = new RoomServiceClient(livekitHost, 'devkey', 'secret');

  // if this room doesn't exist, it'll be automatically created when the first
  // client joins
  // identifier to be used for participant.
  // it's available as LocalParticipant.identity with livekit-client SDK
  const accessToken = new AccessToken('devkey', 'secret', {
    identity: userId
  });

  accessToken.addGrant({ roomJoin: true, room: roomId });
  const participants = await roomService.listParticipants(roomId);
  console.log('participants ', participants);
  return accessToken.toJwt();
};

const createRoomId = (participants) => {
  // Create a unique room name for any two participants
  const roomId = participants.sort().join('-');
  return roomId;
};

router.route('/join/:roomId/:userId').post((req, res) => {
  console.log('joining room');
  res.send(joinRoom(req.params.userId, req.params.roomId));
});

router.route('/roomid/:participants').get((req, res) => {
  console.log('creating room ');
  res.send(createRoomId(JSON.parse(req.params.participants)));
});

module.exports = router;

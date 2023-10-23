const express = require('express');
const util = require('util');
const router = express.Router();
const { AccessToken, RoomServiceClient } = require('livekit-server-sdk');

require('dotenv').config();

const livekitHost = process.env.REACT_APP_LIVEKIT_HOST;
const livekitApiKey = process.env.LIVEKIT_API_KEY;
const livekitApiSecret = process.env.LIVEKIT_API_SECRET;

router.route('/').post(async (req, res) => {
  // main endpoint to make room
  console.log('room post');

  //console.log('req ', req);
  const roomService = new RoomServiceClient(livekitHost, livekitApiKey, livekitApiSecret);

  const opts = {
    name: 'happy-frog-dance2', //'room-' + userId,
    emptyTimeout: 10 * 60, // 10 minutes
    maxParticipants: 2
  };
  res.send({
    message: 'Room created',
    data: await roomService.createRoom(opts).then((room) => {
      console.log('room created', room.name);
      //console.log('util.inspect ', util.inspect(room, false, null, true));
      return room;
    })
  });
});

router.route('/:roomId').delete((req, res) => {
  //Deleting a room causes all Participants to be disconnected.
  const roomService = new RoomServiceClient(livekitHost, livekitApiKey, livekitApiSecret);
  res.send(
    roomService.deleteRoom(req.params?.roomId).then((room) => {
      console.log('room deleted', room);
    })
  );
});

const getRoomToken = async (userId, roomId) => {
  const roomService = new RoomServiceClient(livekitHost, livekitApiKey, livekitApiSecret);

  // if this room doesn't exist, it'll be automatically created when the first
  // client joins
  // identifier to be used for participant.
  // it's available as LocalParticipant.identity with livekit-client SDK
  const accessToken = new AccessToken(livekitApiKey, livekitApiSecret, {
    identity: userId
  });

  accessToken.addGrant({ roomJoin: true, room: roomId });
  const participants = await roomService.listParticipants(roomId);
  console.log('participants ', participants);
  console.log(' token ', accessToken.toJwt());
  return accessToken.toJwt();
};

const createRoomId = (participants) => {
  // Create a unique room name for any two participants
  const roomId = participants.sort().join('-');
  return roomId;
};

router.route('/join/:roomId/:userId').post(async (req, res) => {
  console.log('getting room token');
  const token = await getRoomToken(req.params.userId, req.params.roomId);
  res.send(JSON.stringify(token));
});

router.route('/roomid/:participants').get((req, res) => {
  console.log('creating room ');
  res.send(createRoomId(JSON.parse(req.params.participants)));
});

module.exports = router;

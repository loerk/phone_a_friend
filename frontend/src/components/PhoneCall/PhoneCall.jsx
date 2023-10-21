import '../HomePage/HomePage.css';
const { LiveKitRoom } = require('@livekit/components-react');
//import { fetchData } from '../../api/fetcher';

// import

//const makeCall = async () => {
//   console.log('makeCall');
//   const fakeId = '123';
//   try {
//     const room = await fetchData('/api/room', 'POST', { data: fakeId });
//     console.log('room ', room);
//     const roomId = 'happy-frog-dance2'; //room.data.name;
//     const userId = fakeId;
//     console.log('userId ', userId);
//     const token = await fetchData(`/api/room/join/${roomId}/${userId}`, 'POST');
//     console.log('result ', token);
//     if (token) {
//       return token;
//     } else {
//       throw new Error('Get Token Error');
//     }
//   } catch (error) {
//     console.log('Error ', error);
//   }
// };

export default function PhoneCall() {
  //console.log('makeCall fake call ', makeCall);

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6ImhhcHB5LWZyb2ctZGFuY2UyIn0sImlhdCI6MTY5NzkzMTA4OSwibmJmIjoxNjk3OTMxMDg5LCJleHAiOjE2OTc5NTI2ODksImlzcyI6ImRldmtleSIsInN1YiI6IjEyMyIsImp0aSI6IjEyMyJ9.hgfJqSxLm5BHySLf46kXN2_gnxeH_1if2xrsfZ_CVqo';
  const wsUrl = 'ws://localhost:7880/';

  console.log('token', token);
  console.log('wsUrl ', wsUrl);
  return (
    // livekit component
    <div>
      <h1 className="maintitle">Calling...</h1>
      <LiveKitRoom audio={true} video={false} token={token} serverUrl={wsUrl}></LiveKitRoom>
    </div>
  );
}

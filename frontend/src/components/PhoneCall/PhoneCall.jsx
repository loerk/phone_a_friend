import '../HomePage/HomePage.css';
import { MyContext } from '../../MyContext';
import { useContext } from 'react';
//const { LiveKitRoom } = require('@livekit/components-react');
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
console.log(this);

export default function PhoneCall({ user }) {
  //console.log('makeCall fake call ', makeCall);
  //const user = '123';
  //const friend = '456';
  const { context, setContext } = useContext(MyContext);
  console.log('Text from context ', context);
  const fakeToken1 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTgwMjIwNzIsImlzcyI6ImRldmtleSIsIm5hbWUiOiJ1c2VyMSIsIm5iZiI6MTY5NzkzNTY3Miwic3ViIjoidXNlcjEiLCJ2aWRlbyI6eyJyb29tIjoiaGFwcHktZnJvZy1kYW5jZTIiLCJyb29tSm9pbiI6dHJ1ZX19.HnzZ6vBB6GKgpL3u2kC06Y7VZBwJdMUis8inOGFGZyU';
  const fakeToken2 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTgwMjIwOTYsImlzcyI6ImRldmtleSIsIm5hbWUiOiJ1c2VyMiIsIm5iZiI6MTY5NzkzNTY5Niwic3ViIjoidXNlcjIiLCJ2aWRlbyI6eyJyb29tIjoiaGFwcHktZnJvZy1kYW5jZTIiLCJyb29tSm9pbiI6dHJ1ZX19.OFZPgiiGsaLn1eKKkd41y4kEU-5X2kpFDVOKWZq6xvs';
  let token;
  if (user == '123') token = fakeToken1;
  else token = fakeToken2;

  const wsUrl = 'ws://localhost:7880/';

  console.log('wsUrl ', wsUrl);
  return (
    <div>
      <button onClick={() => setContext('Hellow, world')}>Mebutton</button>
    </div>
  );
  // return (
  //   // livekit component
  //   <div>
  //     <MyContext.Provider value={{ text, setText }}>
  //       <h1 className="maintitle">Calling...</h1>
  //       <button onClick={() => setText('Hellow, world')}></button>
  //       <LiveKitRoom audio={true} video={false} token={token} serverUrl={wsUrl}></LiveKitRoom>
  //     </MyContext.Provider>
  //   </div>
  // );
}

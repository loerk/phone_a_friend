import React, { useState } from 'react';
import { usePassageUserInfo } from '../../hooks';
import SelectTime from './SelectTime';

export default function SelectStatus() {
  const [status, setStatus] = useState('available');
  const [setTime] = useState(null);
  const { userInfo: passageUserInfo } = usePassageUserInfo();

  // TODO: send status and Time to the backend
  const buttonStyles = {
    padding: '2rem',
    margin: '2rem',
    border: '1px solid black',
    background: 'white',
    borderRadius: '1rem'
  };
  return (
    <div
      style={{
        display: 'flex',
        background: 'white',
        marginBottom: '2rem',
        justifyContent: 'center',
        borderEndStartRadius: '1rem',
        borderEndEndRadius: '1rem'
      }}
    >
      {passageUserInfo && (
        <div>
          <h3 style={{ textAlign: 'center', fontSize: '2rem' }}>My Status:</h3>
          <SelectTime setTime={setTime} />
          <div>
            <button
              style={{
                ...buttonStyles,
                background: status === 'available' ? 'black' : 'white',
                color: status === 'available' ? 'white' : 'black'
              }}
              onClick={() => setStatus('available')}
            >
              Available
            </button>
            <button
              style={{
                ...buttonStyles,
                background: status === 'unavailable' ? 'black' : 'white',
                color: status === 'unavailable' ? 'white' : 'black'
              }}
              onClick={() => setStatus('unavailable')}
            >
              Unvailable
            </button>
            <button
              style={{
                ...buttonStyles,
                background: status === 'moody' ? 'black' : 'white',
                color: status === 'moody' ? 'white' : 'black'
              }}
              onClick={() => setStatus('moody')}
            >
              Need a call
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

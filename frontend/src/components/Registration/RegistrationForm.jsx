import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { usePassageUserInfo } from '../../hooks';

import { RegistrationField } from './RegistrationField';
import { fetchData } from '../../api/fetcher';

export const RegistrationForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { userInfo: passageUserInfo } = usePassageUserInfo();

  const makeCall = async () => {
    //const injectedUserData = { ...userData, id: passageUserInfo.id };
    setLoading(true);
    try {
      const result = await fetchData('/api/room', 'POST', { data: '123' });
      if (typeof result !== 'string') {
        console.log({ result });
        setData(result);
      } else {
        throw new Error('Create Room Error');
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (userData) => {
    const injectedUserData = { ...userData, id: passageUserInfo.id, email: passageUserInfo.email };
    setLoading(true);
    try {
      const result = await fetchData('/api/users', 'POST', injectedUserData);
      if (typeof result !== 'string') {
        console.log({ result });
        setData(result);
      } else {
        throw new Error('Registration Error');
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', phoneNumber: '', email: '', dob: '', id: '' }}
      onSubmit={(values) => {
        makeCall(values); // just for testing calls, move to different view later
        // registerUser(values);
        //route away
      }}
    >
      <Form style={{ display: 'flex', flexDirection: 'column' }}>
        {!passageUserInfo?.email && <RegistrationField type={'email'} label={'Email'} />}
        <RegistrationField type={'username'} label={'Name'} />
        <RegistrationField type={'phoneNumber'} label={'Phone'} />
        <RegistrationField type={'dob'} label={'Date of birth'} />
        <div style={{ paddingTop: '1rem', overflow: 'hidden', lineBreak: 'anywhere' }}>
          {data && <p>{JSON.stringify(data)}</p>}
          {loading && <p>loading...</p>}
          {error && <div>{JSON.stringify(error)}</div>}
        </div>
        <button style={{ padding: '0.5rem', marginTop: '1rem' }} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

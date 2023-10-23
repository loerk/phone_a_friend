import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { usePassageUserInfo } from '../../hooks';
import { useNavigate } from 'react-router-dom'; //Routes, Route,
import { RegistrationField } from './RegistrationField';
import { fetchData } from '../../api/fetcher';

export const RegistrationForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const { userInfo: passageUserInfo } = usePassageUserInfo();

  const navigate = useNavigate();
  // const userIsAlreadyRegistered = fetchData(`/user/${passageUserInfo?.id}`);

  useEffect(() => {
    const getUserData = async (email) => {
      if (!email) return;
      try {
        const response = await fetchData(`/api/users/email/${email}`, 'GET');
        if (typeof response === 'string') {
          throw new Error('Error');
        }
        if (response?.data?._id) {
          navigate('/homepage', { state: response.data });
        } else {
          setData({
            userName: response?.data?.username,
            phoneNumber: response?.data?.phoneNumber,
            email: response?.data?.email,
            dob: response?.data?.dob
          });
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoadingData(false);
      }
    };

    getUserData(passageUserInfo?.email);
  }, [passageUserInfo]);

  const registerUser = async (userData) => {
    const injectedUserData = {
      ...userData,
      id: passageUserInfo?.id,
      email: passageUserInfo?.email
    };
    setLoading(true);
    try {
      const response = await fetchData('/api/users', 'POST', injectedUserData);
      console.log('result', response);
      if (typeof result !== 'string') {
        console.log({ response });
        setData({
          userName: response?.data?.username,
          phoneNumber: response?.data?.phoneNumber,
          email: response?.data?.email,
          dob: response?.data?.dob
        });
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
    <>
      {loadingData ? (
        <p>Loading...</p>
      ) : (
        <Formik
          initialValues={{
            username: data.userName || '',
            phoneNumber: data.phoneNumber || '',
            email: data.email || '',
            dob: data.dob || '',
            id: ''
          }}
          onSubmit={(values) => {
            registerUser(values);
            navigate('/homepage', {
              state: { data }
            });
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
      )}
    </>
  );
};

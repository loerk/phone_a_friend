import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { usePassageUserInfo } from '../../hooks';

import * as yup from 'yup';
import { RegistrationField } from './RegistrationField';
import { fetchData } from '../../api/fetcher';

export const RegistrationForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    dob: '',
    id: ''
  });

  const { userInfo: passageUserInfo } = usePassageUserInfo();

  useEffect(() => {
    if (passageUserInfo) {
      setRegistrationData({
        ...registrationData,
        email: passageUserInfo?.email,
        phoneNumber: passageUserInfo?.phone,
        id: passageUserInfo.id
      });
    }
  }, [passageUserInfo]);

  const registerUser = async () => {
    setLoading(true);
    try {
      const result = await fetchData('/api/users', 'POST', passageUserInfo);
      if (typeof result !== 'string') {
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

  const validationSchema = yup.object().shape({
    username: yup.string().required("your username can't be empty"),
    email: yup.string().email().required('please enter a valid email'),
    phoneNumber: yup.number().nullable().required('please enter a phonenumber'),
    dob: yup.date().required('please enter a valid date')
  });

  return (
    <Formik
      initialValues={registrationData}
      validationSchema={validationSchema}
      onSubmit={(values, action) => {
        // not working
        setRegistrationData(values);
        console.log('values ', values);
        console.log('action ', action);
        console.log('submit!');
      }}
    >
      <Form style={{ display: 'flex', flexDirection: 'column' }}>
        {!passageUserInfo?.email && <RegistrationField type={'email'} label={'Email'} />}
        <RegistrationField type={'username'} label={'Name'} />
        <RegistrationField type={'phoneNumber'} label={'Phone'} />
        <RegistrationField type={'dob'} label={'Date of birth'} />

        {data ? (
          <>
            <br></br>
            <div>{JSON.stringify(data)}</div>
          </>
        ) : (
          <>
            <br></br>
            {loading && <p>loading...</p>}
            {error && <div>{JSON.stringify(error)}</div>}
            <div>this label should change when you click Register</div>
          </>
        )}

        <button
          style={{ padding: '0.5rem', marginTop: '2rem' }}
          onClick={registerUser}
          type="submit"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

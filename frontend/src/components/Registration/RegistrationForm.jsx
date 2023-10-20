import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { usePassageUserInfo } from '../../hooks';

import * as yup from 'yup';
import { RegistrationField } from './RegistrationField';

export const RegistrationForm = () => {
  const [data, setData] = useState(null);

  function registerUser() {
    console.log('passageUserInfo', passageUserInfo);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:7001/api/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(
      JSON.stringify({
        email: passageUserInfo?.email | 'test@gmail.com',
        phoneNumber: passageUserInfo?.phone | '8006008000'
      })
    );
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
  }

  const { userInfo: passageUserInfo } = usePassageUserInfo();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    phoneNumber: yup.number().nullable().required('please enter a phonenumber')
  });

  const initialFormikValues = {
    email: passageUserInfo?.email || '',
    phoneNumber: passageUserInfo?.phone || '',
    id: passageUserInfo?.id
  };

  return (
    <Formik
      initialValues={initialFormikValues}
      validationSchema={validationSchema}
      onSubmit={(values, action) => {
        // not working
        console.log('values ', values);
        console.log('action ', action);
        console.log('submit!');
      }}
    >
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          {!passageUserInfo?.email && <RegistrationField type={'email'} label={'Email'} />}
          <RegistrationField type={'phoneNumber'} label={'Phonenumber'} />
          <RegistrationField type={'dob'} label={'Date of birth'} />

        {data ? (
          <>
            <br></br>
            <div>{JSON.stringify(data)}</div>
          </>
        ) : (
          <>
            <br></br>
            <div>this label should change when you click Register</div>
          </>
        )}

        <button
          style={{ padding: '0.5rem', marginTop: '2rem' }}
          onClick={registerUser}
          type="button"
        >
          Register
          </button>
        </Form>
    </Formik>
  );
};

import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { usePassageUserInfo } from '../../hooks';

import * as yup from 'yup';
import { RegistrationField } from './RegistrationField';

export const RegistrationForm = () => {
  const [data, setData] = useState(null);

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:7001/api/users');
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  const { userInfo: passageUserInfo } = usePassageUserInfo();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    phoneNumber: yup.number().nullable().required('please enter a phonenumber'),
    dob: yup.date().required('please enter a date of birth')
  });

  const initialFormikValues = {
    email: passageUserInfo?.email || '',
    dob: '',
    phoneNumber: passageUserInfo?.phone || '',
    id: passageUserInfo?.id
  };

  return (
    <Formik
      initialValues={initialFormikValues}
      validationSchema={validationSchema}
      onSubmit={(values, action) => {
        // createUser(values)
        console.log('values ' + values);
        console.log('action ', action);
        console.log('submit!');
      }}
    >
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          {!passageUserInfo?.email && <RegistrationField type={'email'} label={'Email'} />}
          <RegistrationField type={'phoneNumber'} label={'Phonenumber'} />
          <RegistrationField type={'dob'} label={'Date of birth'} />
        <button onClick={handleClick}>Get Data</button>
        {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
        <button style={{ padding: '0.5rem', marginTop: '2rem' }} type="submit">
            Get Started
          </button>
        </Form>
    </Formik>
  );
};

import React from 'react';
import { Form, Formik } from 'formik';
import { usePassageUserInfo } from '../../hooks';

import * as yup from 'yup';
import { RegistrationField } from './RegistrationField';
import createUser from './Registration';

export const RegistrationForm = () => {
  const { userInfo: passageUserInfo } = usePassageUserInfo();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    phoneNumber: yup.number().nullable().required('Please enter a phone number'),
    dob: yup.date().required('Please enter your date of birth')
  });

  console.log('passageUserInfo ' + passageUserInfo?.email + passageUserInfo?.phone);

  const initialFormikValues = {
    username: '',
    email: passageUserInfo?.email || '',
    dob: '',
    phoneNumber: passageUserInfo?.phone || '',
    id: passageUserInfo?.id
  };

  return (
    <Formik
      initialValues={initialFormikValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('values ' + values);
        createUser(values);
      }}
    >
      <Form style={{ display: 'flex', flexDirection: 'column' }}>
        {!passageUserInfo?.email && <RegistrationField type={'email'} label={'Email'} />}
        {!passageUserInfo?.phone && (
          <RegistrationField type={'phoneNumber'} label={'Phone Number'} />
        )}
        <RegistrationField type={'dob'} label={'Date of birth'} />

        <button style={{ padding: '0.5rem', marginTop: '2rem' }} type="submit">
          Get Started
        </button>
      </Form>
    </Formik>
  );
};

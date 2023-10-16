import React from 'react';
import { Form, Formik } from 'formik';
import { usePassageUserInfo } from '../../hooks';

import * as yup from 'yup';
import { RegistrationField } from './RegistrationField';

export const RegistrationForm = () => {
  const { userInfo: passageUserInfo } = usePassageUserInfo();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().required('please enter a username'),
    phoneNumber: yup.number().nullable().required('please enter a phonenumber'),
    dob: yup.date().required('please enter a date of birth')
  });

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
      onSubmit={(values, { setSubmitting }) => {
        // createUser(values)
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          {!passageUserInfo?.email && <RegistrationField type={'email'} label={'Email'} />}
          <RegistrationField type={'username'} label={'Username'} />
          <RegistrationField type={'phoneNumber'} label={'Phonenumber'} />
          <RegistrationField type={'dob'} label={'Date of birth'} />

          <button
            style={{ padding: '0.5rem', marginTop: '2rem' }}
            type="submit"
            disabled={isSubmitting}
          >
            Get Started
          </button>
        </Form>
      )}
    </Formik>
  );
};

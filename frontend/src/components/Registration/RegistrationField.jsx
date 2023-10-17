import { ErrorMessage, Field } from 'formik';
import React from 'react';

export const RegistrationField = ({ type, label }) => {
  return (
    <>
      <p>{label}:</p>
      <Field
        style={{ padding: '0.5rem' }}
        type={type}
        name={type}
        placeholder={label}
        label={label}
      />
      <ErrorMessage name={type} style={{ color: 'red' }} component="p" />
    </>
  );
};

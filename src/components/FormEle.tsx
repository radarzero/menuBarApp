import React, { Component } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export class FormEle extends Component {
    render() {
        return (
            <div className='form-back'>
                 <h1 className='form-heading' >Signup for newsletter</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="firstName"className='input1'>First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName"className='input2'>Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email"className='input3'>Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <button type="submit" className='form-button'>Submit</button>
        </Form>
      </Formik>
            </div>
        );
    }
}

export default FormEle;

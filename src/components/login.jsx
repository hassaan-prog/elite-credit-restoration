import React from 'react';
import InputField from './inputField';
import Button from './button';

const Login = () => {
    const redirectToClientList = () => {
       window.location.href = '/client-list';
    }
    return (
      <div className="contact-form">
        <h5>Login</h5>
        <form id="contact">
          <InputField name="email" label="Your E-Mail" />
          <InputField name="password" label="Password" />
                <Button redirectFunction={redirectToClientList} text="Submit"/>
        </form>
        <div className="form-group">
          <div
            id="success"
            className="alert alert-success wow fadeInUp"
            role="alert"
          >
            {' '}
            Your message was sent successfully! We will be in touch as soon as
            we can.{' '}
          </div>

          <div
            id="error"
            className="alert alert-danger wow fadeInUp"
            role="alert"
          >
            {' '}
            Something went wrong, try refreshing and submitting the form again.{' '}
          </div>
        </div>
      </div>
    );
};

export default Login;
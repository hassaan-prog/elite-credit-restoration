import React from 'react';
import InputField from '../inputField';
import InputFile from '../inputFile';
import Button from '../button';

const Inventory = () => {
  const takeBackToList = () => {
    window.location.href = '/client-list';
  }
    return (
      <div className="contact-form">
        <h5>Client Info</h5>
        <form id="contact">
          <InputField name="name" label="Full Name" />
          <InputField name="email" label="Your E-Mail" />
          <InputField name="phone" label="Phone No" />
          <InputField name="dateOfBirth" label="Date of Birth" />
          <InputField name="ssnCard" label="SSN Card Number" />
          <InputFile label="SSN Card Picture" name="ssnCardPicture" />
          <InputFile label="Proof of Address" name="proofOfAddress" />
          <InputFile label="National ID" name="nationalId" />
          <InputFile label="Documents" name="documents" />
          <Button text="Submit" redirectFunction={takeBackToList} />
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

export default Inventory;
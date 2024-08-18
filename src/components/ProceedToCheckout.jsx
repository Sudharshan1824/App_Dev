import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const PersonalInfoSection = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const InputField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const CheckoutButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 20px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 20px;
`;

const ProceedToCheckout = () => {
  const location = useLocation();
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    flatNo: '',
    homeAddress: '',
    cityPincode: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = location.state?.totalPrice || 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleCompleteBooking = () => {
    // In a real application, you would also handle form submission here
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CheckoutContainer>
      <Header>Proceed to Checkout</Header>

      <PersonalInfoSection>
        <h2>Personal Information</h2>
        <InputField>
          <Label>Full Name</Label>
          <Input 
            type="text" 
            name="fullName" 
            value={personalInfo.fullName} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>Email Address</Label>
          <Input 
            type="email" 
            name="email" 
            value={personalInfo.email} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>Phone Number</Label>
          <Input 
            type="text" 
            name="phoneNumber" 
            value={personalInfo.phoneNumber} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>Flat No</Label>
          <Input 
            type="text" 
            name="flatNo" 
            value={personalInfo.flatNo} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>Home Address</Label>
          <Input 
            type="text" 
            name="homeAddress" 
            value={personalInfo.homeAddress} 
            onChange={handleInputChange} 
          />
        </InputField>
        <InputField>
          <Label>City & Pincode</Label>
          <Input 
            type="text" 
            name="cityPincode" 
            value={personalInfo.cityPincode} 
            onChange={handleInputChange} 
          />
        </InputField>
      </PersonalInfoSection>

      <CheckoutButton onClick={handleCompleteBooking}>Complete Booking</CheckoutButton>

      <ModalBackdrop isOpen={isModalOpen}>
        <ModalContent>
          <h2>Success!</h2>
          <p>Your booking has been successfully completed!</p>
          <CloseButton onClick={handleCloseModal}>Close</CloseButton>
        </ModalContent>
      </ModalBackdrop>
    </CheckoutContainer>
  );
};

export default ProceedToCheckout;
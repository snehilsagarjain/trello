import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #ff6347;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5533f;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const SocialButton = styled.button`
  width: 40%;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #4267B2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #365899;
  }
`;
const StyledTextarea = styled.textarea`
    width: 100%;
  `;



const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add validation and submit logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div style={{ border: '1px solid red', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom right, #ff7f50, #ff6347)' }}>
            <FormContainer>
                <Title>Sign Up</Title>
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <InputField
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <StyledTextarea type="textarea" value={formData.address} onChange={handleChange} />
                    <SubmitButton type="submit">Sign Up</SubmitButton>
                </form>

                <SocialLoginContainer>
                    <SocialButton>Sign Up with Facebook</SocialButton>
                    <SocialButton>Sign Up with Google</SocialButton>
                </SocialLoginContainer>
                <div style={{ textAlign: 'center' }}>Already a member? <Link to="/"> Login </Link> </div>
            </FormContainer >
        </div >
    );
};

export default SignupForm;

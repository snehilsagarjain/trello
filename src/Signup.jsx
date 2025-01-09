import React, { useState } from 'react'
import "./Signup.css";
import { Link } from 'react-router-dom';
const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("name=", name);
        console.log("value=", value);
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log("name=", name);
        console.log("value=", value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add validation and submit logic here
        console.log('Form submitted:', formData);
    };
    return (
        // <div>Signup</div>
        <div style={{ border: '1px solid red', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom right, #ff7f50, #ff6347)' }}>
            <div className='FormContainer'>
                <div className='Title'>Sign Up</div>
                <form onSubmit={handleSubmit}>
                    <input className='InputField' type="text" name="name" placeholder="Full Name"
                        value={formData.name} onChange={handleChange} required />
                    <input className='InputField' type="email" name="email" placeholder="Email"
                        value={formData.email} onChange={handleChange} required />
                    <input className='InputField' type="password" name="password" placeholder="Password"
                        value={formData.password} onChange={handleChange} required />
                    <textarea rows="4" className='StyledTextarea' placeholder="Enter address..."
                        name="address" value={formData.address} onChange={handleChange} />
                    {/* <input className='StyledTextarea' type="textarea" value={formData.address} onChange={handleChange} /> */}
                    <button className='SubmitButton' type="submit">Sign Up</button>
                </form>

                <div className='SocialLoginContainer'>
                    <button className='SocialButton'>Sign Up with Facebook</button>
                    <button className='SocialButton'>Sign Up with Google</button>
                </div>
                <div style={{ textAlign: 'center' }}>Already a member? <Link to="/"> Login </Link> </div>
            </div >
        </div>
    )
}

export default Signup
import React, { useState } from 'react';
import { toast } from "react-hot-toast";

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const Navigate = useNavigate();
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        Navigate("/dashboard")
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address <sup>*</sup></p>
                <input
                    required
                    type='text'
                    placeholder='Enter email id'
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                />
            </label>

            <label>
                <p>Password <sup>*</sup></p>
                <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter Password'
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                />
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
                <Link to="#">
                    <p>Forgot Password</p>
                </Link>
            </label>

            <button>Sign in</button>
        </form>
    );
}

export default LoginForm;

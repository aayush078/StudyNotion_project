import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
        toast.error("password do not match");
        return;
    }
    setIsLoggedIn(true);
    toast.success("Account is created")
    Navigate("/dashboard")
  }
  return (
    <div>
      {/* sttudent instructor tab */}

      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first Name & Last Name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
            required
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>
        </div>

        {/* email Add */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={changeHandler}
            value={formData.email}
          />
        </label>

        {/* creat password */}
        <label>
          <p>
            Creat Password<sup>*</sup>
          </p>
          <input
            required
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter Password"
            onChange={changeHandler}
            value={formData.password}
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        {/* confirm password */}
        <label>
          <p>
            Confirm Password<sup>*</sup>
          </p>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={formData.confirmPassword}
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <button >Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;

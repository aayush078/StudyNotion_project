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
  const [showConfirmPassword, sethowConfirmPassword] = useState(false);
  const [accountType,setAccountType]= useState("student");

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
    toast.success("Account is created");
      const accountData = {
        ...formData
    };

    const finalData = {
        ...accountData,
        accountType
    }

    console.log("printing Final account data ");
    console.log(finalData);

    Navigate("/dashboard")
  }
  return (
    <div>
      {/* sttudent instructor tab */}

      <div className='flex bg-richblack-800 rounded-full p-1 gap-x-1 my-6 max-w-max'>
        <button 
        className={`${accountType === "student" ?
        "bg-richblack-900 text-richblack-5" :
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
        onClick ={() => setAccountType("student")}>
          Student
        </button>

        <button onClick ={() => setAccountType("instructor")}
        className={`${accountType === "instructor" ?
        "bg-richblack-900 text-richblack-5" :
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}>
          Instructor
        </button> 
      </div>

      <form onSubmit={submitHandler}>
        {/* first Name & Last Name */}
        <div className='flex gap-x-4 mt-[10px] '>
          <label className='w-full mt-[10px]'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              First Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              className="bg-richblack-800 rounded-[0.4rem] w-full p-[12px] h-[2.5rem]  text-richblack-5"
            />
          </label>

          <label className='w-full mt-[10px]'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.4rem] w-full p-[12px] h-[2.5rem]  text-richblack-5"
            />
          </label>
        </div>

        {/* email Add */}
        <div className='mt-[10px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={changeHandler}
              value={formData.email}
              className="bg-richblack-800 rounded-[0.4rem] w-full p-[12px] h-[2.5rem]  text-richblack-5"
            />
          </label>
        </div>

        {/* creat password */}
        <div className='flex gap-x-4 mt-[10px]'>
        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Creat Password<sup className='text-pink-200'>*</sup>
          </p>
          <input
            required
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter Password"
            onChange={changeHandler}
            value={formData.password}
            className="bg-richblack-800 rounded-[0.4rem] w-full p-[12px] h-[2.5rem]  text-richblack-5"
          />
          <span onClick={() => setShowPassword((prev) => !prev)}
          className='absolute cursor-pointer right-3 top-[34px] '>
            {showPassword ?  
              (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> )
              : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
          </span>
        </label>

        {/* confirm password */}
        <label className='w-full relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Confirm Password<sup className='text-pink-200'>*</sup>
          </p>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={formData.confirmPassword}
            className="bg-richblack-800 rounded-[0.4rem] w-full p-[12px] h-[2.5rem]  text-richblack-5"

          />
          <span onClick={() => sethowConfirmPassword((prev) => !prev)}
          className='absolute cursor-pointer right-3 top-[34px] '>
              {showConfirmPassword ?  
              (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> )
              : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}          </span>
        </label>
        </div>

        <button 
        className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-7' >
          Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;

import React from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import frameImage from "../assets/frame.png";
import {FcGoogle} from "react-icons/fc";

const Template = ({ title ,desc1,desc2,image,formtype,setIsLoggedIn }) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between'>
      
      <div className=' w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5  font-semibold  '>
          {title}
        </h1>
        <p className='text=[1.1rem] leading[1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <br/>
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ? 
        (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : 
        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)};

        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='h-[1px] w-full bg-richblack-700 '></div>
          <div className='text-richblack-100 font-medium leading[1.375rem]'>OR</div>
          <div className='h-[1px] w-full bg-richblack-700 '></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px] font-medium
         text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle/>
          <p>Sign Up With Google</p>
        </button>

      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img 
        src={frameImage}
        alt="pattern"
        width={558}
        height={504}
        loading='lazy'
        />

        <img 
        src={image}
        alt="pattern"
        width={558}
        height={504}
        loading='lazy'
        className='absolute -top-4 right-4'
        />
      </div>
    </div>
  )
}

export default Template

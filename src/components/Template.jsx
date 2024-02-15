import React from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import frameImage from "../assets/frame.png";

const Template = ({ title ,desc1,desc2,image,formtype,setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>

        {formtype === "signup" ? 
        (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : 
        (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)};

        <div>
          <div></div>
          <div>OR</div>
          <div></div>
        </div>

        <button>
          <p>Sign Up With Google</p>
        </button>

      </div>

      <div>
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
        className=''
        />
      </div>
    </div>
  )
}

export default Template

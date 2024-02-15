// Signup.js
import React from 'react';
import Template from '../components/Template';
import SignupImg from '../assets/signup.png';

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Create an Account"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={SignupImg}
        formtype="signup" // Set formtype to "signup"
        setIsLoggedIn={setIsLoggedIn} // Pass setIsLoggedIn prop
      />
    </div>
  );
}

export default Signup;

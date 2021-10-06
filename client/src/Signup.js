import React from "react";
import AuthForm from './components/AuthForm';

const Signup = () => {

  return <AuthForm inputTypes={["Username", "Email Address", "Password", "Confirm Password"]} loginPage={false} />
};

export default Signup;

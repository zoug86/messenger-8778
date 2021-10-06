import React from "react";
import AuthForm from './components/AuthForm';

const Login = () => {

  return <AuthForm inputTypes={["Email Address", "Password"]} loginPage={true} />

}

export default Login;

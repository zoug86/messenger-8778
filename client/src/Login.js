import React from "react";
import AuthForm from './components/AuthForm';


const Login = (props) => {

  return <AuthForm inputTypes={["Username", "Password"]} loginPage={true} />

}



export default Login;

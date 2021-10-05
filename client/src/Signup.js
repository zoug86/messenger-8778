import React from "react";
import AuthForm from './components/AuthForm';


// const useStyles = makeStyles((theme) => ({

//   signupHeaderBtn: {
//     color: "#3A8DFF",
//     boxShadow: "0 1px 6px rgba(0, 0, 0, 0.03), 0 1px 4px rgba(0, 0, 0, 0.05)",
//     padding: "15px 50px",
//     marginLeft: "30px",
//     '@media (max-width:550px)': {
//       marginLeft: "15px",
//       padding: "15px 20px",
//     },
//   },

// }));


const Signup = (props) => {
  // const classes = useStyles();

  return <AuthForm inputTypes={["Username", "Email Address", "Password", "Confirm Password"]} loginPage={false} />
};


export default Signup;

import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { register } from "./store/utils/thunkCreators";
import bubble from './assets/bubble.svg';
import globalUseStyles from "./themes/globalUseStyles";

const useStyles = makeStyles((theme) => ({

  signupHeaderBtn: {
    color: "#3A8DFF",
    boxShadow: "0 1px 6px rgba(0, 0, 0, 0.03), 0 1px 4px rgba(0, 0, 0, 0.05)",
    padding: "15px 50px",
    marginLeft: "30px",
    '@media (max-width:550px)': {
      marginLeft: "15px",
      padding: "15px 20px",
    },
  },

}));


const Login = (props) => {
  const classes = useStyles();
  const globalClasses = globalUseStyles();

  const history = useHistory();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container className={globalClasses.root}>
      < Box component={Grid} className={globalClasses.imageContainer} sm={6} md={5} lg={4}>
        <img src={bubble} className={globalClasses.bubble} />
        <Typography className={globalClasses.overlayText}>
          Converse with anyone with any language
        </Typography>
      </Box>
      <Box component={Grid} className={globalClasses.login} sm={6} md={7} lg={8}>
        <Grid container item className={globalClasses.header}>
          <Typography className={globalClasses.text}>Already have an account?</Typography>
          <Button className={classes.signupHeaderBtn} onClick={() => history.push("/login")}>Login</Button>
        </Grid>
        <Box className={globalClasses.loginBody}>
          <Grid container item className={globalClasses.welcomeMsg}>
            <Typography className={globalClasses.welcome}>Create an account</Typography>
          </Grid>
          <form onSubmit={handleRegister} className={globalClasses.form}>
            <Grid className={globalClasses.inputGrid}>
              <Grid className={globalClasses.inputControl}>
                <FormControl margin="normal" fullWidth >
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid className={globalClasses.inputControl}>
                <FormControl fullWidth>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid className={globalClasses.inputControl}>
                <FormControl fullWidth error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid className={globalClasses.inputControl}>
                <FormControl fullWidth error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <Button type="submit" variant="contained" size="large" className={globalClasses.loginBtn}>
                  Create
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

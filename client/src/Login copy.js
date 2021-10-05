import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment,
  Link,
} from "@material-ui/core";
import { login } from "./store/utils/thunkCreators";
import bubble from './assets/bubble.svg';
import globalUseStyles from "./themes/globalUseStyles";


const Login = (props) => {
  const globalClasses = globalUseStyles();
  const history = useHistory();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
          <Typography className={globalClasses.text}>Don't have an accoount?</Typography>
          <Button className={globalClasses.headerBtn} onClick={() => history.push("/register")} xs={6}>Create account</Button>
        </Grid>
        <Box className={globalClasses.loginBody}>
          <Grid container item className={globalClasses.welcomeMsg}>
            <Typography className={globalClasses.welcome}>Welcome back!</Typography>
          </Grid>
          <form onSubmit={handleLogin} className={globalClasses.form}>
            < Grid className={globalClasses.inputGrid}>
              <FormControl margin="normal" fullWidth className={globalClasses.inputControl}>
                <TextField
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                  variant="standard"
                  required
                >
                </TextField>
              </FormControl>
              <FormControl margin="normal" fullWidth required className={globalClasses.inputControl}>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                  variant="standard"
                  required
                  InputProps={{
                    endAdornment: <InputAdornment position="start">
                      <Link to="/" className={globalClasses.forgot}>
                        Forgot?
                      </Link>
                    </InputAdornment>,
                  }}
                />
              </FormControl>
              <Grid>
                <Button type="submit" variant="contained" size="large" className={globalClasses.loginBtn}>
                  Login
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

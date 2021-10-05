import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Box, Typography, Button, FormControl, TextField, InputAdornment, Link, FormHelperText, } from "@material-ui/core";
import { login, register } from "../store/utils/thunkCreators";
import bubble from '../assets/bubble.svg';
import globalUseStyles from "../themes/globalUseStyles";


const AuthForm = (props) => {
    const globalClasses = globalUseStyles();
    const history = useHistory();
    const { user, login, register, inputTypes, loginPage } = props;
    const [formErrorMessage, setFormErrorMessage] = useState({});

    const handleLogin = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        await login({ username, password });
    };

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
                <img src={bubble} className={globalClasses.bubble} alt="bg-img" />
                <Typography className={globalClasses.overlayText}>
                    Converse with anyone with any language
                </Typography>
            </Box>
            <Box component={Grid} className={globalClasses.login} sm={6} md={7} lg={8}>
                <Grid container item className={globalClasses.header}>
                    <Typography className={globalClasses.text}>{loginPage ? "Don't have an accoount?" : "Already have an account?"}</Typography>
                    <Button className={globalClasses.headerBtn} onClick={() => loginPage ? history.push("/register") : history.push("/login")} xs={6}>
                        {loginPage ? "Create account" : "Login"}
                    </Button>
                </Grid>
                <Box className={globalClasses.loginBody}>
                    <Grid container item className={globalClasses.welcomeMsg}>
                        <Typography className={globalClasses.welcome}> {loginPage ? "Welcome back!" : "Create an account"}</Typography>
                    </Grid>
                    <form onSubmit={loginPage ? handleLogin : handleRegister} className={globalClasses.form}>
                        < Grid className={globalClasses.inputGrid}>
                            {inputTypes.map(input => (
                                <FormControl margin="normal" fullWidth className={globalClasses.inputControl}
                                    error={input === "Confirm Password" ? !!formErrorMessage.confirmPassword : input === "Password" ? !!formErrorMessage.confirmPassword : null}>
                                    <TextField
                                        aria-label={input}
                                        label={input}
                                        name={input === "Confirm Password" ? "confirmPassword" : input === "Email Address" ? "email" : input.toLowerCase()}
                                        type={input === "Username" ? "text" :
                                            input === "Email Address" ? "email" : "password"}
                                        inputProps={input === "Password" ? { minLength: 6 } : input === "Confirm Password" ? { minLength: 6 } : ''}
                                        variant="standard"
                                        required
                                        InputProps={loginPage && input === "Password" && {
                                            endAdornment: <InputAdornment position="start">
                                                <Link to="/" className={globalClasses.forgot}>
                                                    Forgot?
                                                </Link>
                                            </InputAdornment>,
                                        }}
                                    />
                                    {input === "Confirm Password" &&
                                        <FormHelperText>
                                            {formErrorMessage.confirmPassword}
                                        </FormHelperText>}
                                    {input === "Password" &&
                                        <FormHelperText>
                                            {formErrorMessage.confirmPassword}
                                        </FormHelperText>}
                                </FormControl>
                            ))}
                            <Grid>
                                <Button type="submit" variant="contained" size="large" className={globalClasses.loginBtn}>
                                    {loginPage ? "Login" : "Create"}
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
        register: (credentials) => {
            dispatch(register(credentials));
        },
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

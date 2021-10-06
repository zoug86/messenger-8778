import { makeStyles } from '@material-ui/core/styles';
import bgImage from '../assets/bg-img.png';

const globalUseStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        fontFamily: "Montserrat",

    },
    imageContainer: {
        backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0.85)), url(${bgImage})`,
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
    },
    overlayText: {
        width: "60%",
        fontSize: "25px",
        textAlign: "center",
        '@media (max-width:850px)': {
            fontSize: '20px',
            marginBottom: "8%",
        },
    },
    bubble: {
        marginTop: "50%",
        marginBottom: "8%",
        width: "120px",
        '@media (max-width:600px)': {
            marginTop: "20%",
        },
    },
    login: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        display: "flex",
        justifyContent: "end",
        paddingRight: "40px",
        paddingTop: "40px",
        alignItems: "center",
        '@media (max-width:550px)': {
            paddingRight: "20px",
            paddingTop: "10px",
        },
    },
    headerBtn: {
        color: theme.palette.primary.main,
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1), 0px 3px 10px rgba(0, 0, 0, 0.1)",
        padding: "15px 50px",
        marginLeft: "30px",
        '@media (max-width:550px)': {
            marginLeft: "15px",
            padding: "15px 10px",
        },
    },
    text: {
        color: theme.palette.secondary.main
    },
    loginBody: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5% 10%",
    },
    welcomeMsg: {
        width: "100%",
        margin: "3% 0",
        '@media (max-width:550px)': {
            margin: "0",
        },
    },
    welcome: {
        fontSize: "30px",
    },
    form: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputGrid: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputControl: {
        width: "100%",
        padding: "20px",
        letterSpacing: theme.overrides.MuiInput.input.letterSpacing,
        "& .MuiFormLabel-root": {
            fontSize: "22px",
            top: "-12px"
        },
        '@media (max-width:550px)': {
            padding: "0",
        },
    },
    loginBtn: {
        padding: "15px 70px",
        marginTop: "40%",
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        fontFamily: "Montserrat",
        fontSize: "16px",
        letterSpacing: "1px",
        '@media (max-width:550px)': {
            marginTop: "20%",
            padding: "10px 40px",
        },
    },
    forgot: {
        fontWeight: "bold",
        cursor: "pointer",
        '&:hover': {
            textDecoration: "none",
        }
    }

}));

export default globalUseStyles
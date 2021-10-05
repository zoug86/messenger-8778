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
        boxShadow: "0 1px 6px rgba(0, 0, 0, 0.03), 0 1px 4px rgba(0, 0, 0, 0.05)",
        padding: "15px 30px",
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
        fontSize: "25px",
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
        padding: "10px",
        letterSpacing: theme.overrides.MuiInput.input.letterSpacing,
        height: theme.overrides.MuiInput.input.height,
        fontSize: theme.overrides.MuiInput.input.fontSize,
        '@media (max-width:550px)': {
            padding: "0",
        },
    },
    loginBtn: {
        padding: "15px 50px",
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
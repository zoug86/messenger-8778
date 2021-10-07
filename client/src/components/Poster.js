import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    //CSS for first
    root_first: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginBottom: "20px"
    },
    date_first: {
        fontSize: "12px !important",
        color: "#BECCE2",
        fontWeight: "bold",
        marginBottom: "5px !important"
    },
    text_first: {
        fontSize: 14,
        color: "#91A3C0",
        letterSpacing: -0.2,
        padding: 8,
        fontWeight: "bold"
    },
    bubble_first: {
        background: "#F4F6FA",
        borderRadius: "0 0 0 10px",
        width: "150px",
    },
    image_first: {
        width: "150px",
        height: "150px",
        borderRadius: "10px 10px 0 0",
    },
    //CSS for second
    bubble_second: {
        background: "#F4F6FA",
        marginBottom: "10px",
        borderRadius: "10px 10px 0 10px",
    },
    image_second: {
        width: "100px",
        height: "100px",
        borderRadius: "10px 10px 0 10px",
        marginLeft: "10px"
    },
    // CSS for other user
    otherBubble_first: {
        backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
        borderRadius: "0 0 10px 10px",
        marginBottom: "10px",
        width: "100%"
    },
    otherBubble: {
        backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
        borderRadius: "0 10px 10px 10px",
        marginBottom: "10px",
        width: "max-content"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px"
    },
    otherText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFFFFF",
        letterSpacing: -0.2,
        padding: 8
    },
}));

const Poster = (props) => {
    const classes = useStyles();
    const { text, attachments, time, other } = props;

    if (attachments?.length === 1 && text) {
        return (
            <Box className={classes.root_first}>
                <Box className={classes.dateContainer_first}>
                    <Typography className={classes.date_first}>{time}</Typography>
                </Box>

                <img src={attachments} alt="img" className={classes.image_first} />
                <Box className={other ? classes.otherBubble_first : classes.bubble_first}>
                    <Typography className={other ? classes.otherText : classes.text_first}>
                        {text}
                    </Typography>
                </Box>

            </Box>
        );
    }

    else if (attachments?.length > 1) {
        return (
            <Box className={other ? classes.container : classes.root_first}>
                <Box className={other ? classes.otherBubble : classes.bubble_second}>
                    <Typography className={other ? classes.otherText : classes.text_first}>{text}</Typography>
                </Box >
                <Box>
                    {attachments?.map((attachment, id) => (
                        <img key={id} src={attachment} width={100} height={100} className={classes.image_second} alt="user_img" />
                    ))}
                </Box>
                <Box className={classes.dateContainer_second}>
                    <Typography className={classes.date_first}>{time} </Typography>
                </Box>

            </Box>
        );
    }

    else {
        return (
            <Box className={other ? classes.container : classes.root_first}>

                <Box className={classes.dateContainer_third}>
                    <Typography className={classes.date_first}>{time}</Typography>
                </Box>

                <Box className={other ? classes.otherBubble : classes.bubble_second}>
                    <Typography className={other ? classes.otherText : classes.text_first}>{text}</Typography>
                </Box >
            </Box>
        )
    }
}

export default Poster;

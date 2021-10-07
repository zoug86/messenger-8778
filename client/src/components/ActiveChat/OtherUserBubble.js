import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar } from "@material-ui/core";
import Poster from "../Poster";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6
  },

}));

const OtherUserBubble = (props) => {
  const classes = useStyles();
  const { text, time, otherUser, attachments } = props;
  return (
    <Box className={classes.root}>
      <Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar}></Avatar>
      <Poster text={text} attachments={attachments} time={time} other={true} />
    </Box>
  );
};

export default OtherUserBubble;

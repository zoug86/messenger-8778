import React, { useState } from "react";
import { FormControl, FilledInput, InputAdornment, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import axios from 'axios';
//import Uploady from "@rpldy/uploady";


const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20
  },
  uploadBtn: {
    '&:hover': {
      background: "none",
    },
  },
  upload: {
    color: "lightgrey",
    '&:hover': {
      color: "grey",
    },
  }
}));


const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [urls, setUrls] = useState([]);
  const [photos, setPhotos] = useState([]);

  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  }


  const handleImageChange = (e) => {

    const files = e.target.files[1];
    console.log(files)
    // files.map((file) => {
    //   setPhotos([...photos, file]);
    //   const formData = new FormData();
    //   formData.append("file", file);
    //   formData.append("upload_preset", "messenger");
    //   axios.post(`https://api.cloudinary.com/v1_1/dwuo25yqj/upload`, formData
    //   ).then(response => {
    //     const data = response.data;
    //     console.log(data)
    //     const fileURL = data.secure_url
    //     setUrls([...urls, fileURL]);
    //   })
    // })

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      attachments: [...urls],
      sender: conversationId ? null : user
    };
    await postMessage(reqBody);
    //await fetchConversations();
    setText("");
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={<InputAdornment position="end">
            <input
              accept="image/*"
              className={classes.input}
              style={{ display: 'none' }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" className={classes.uploadBtn}>
                {photos?.map(photo => (
                  <Typography> {photo.name} </Typography >
                ))}

                <ContentCopyIcon className={classes.upload} />
              </Button>
            </label>

          </InputAdornment>}
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    }
  };
};

export default connect(null, mapDispatchToProps)(Input);

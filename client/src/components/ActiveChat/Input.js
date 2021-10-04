import React, { useState } from "react";
import { FormControl, FilledInput, InputAdornment, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage, fetchConversations } from "../../store/utils/thunkCreators";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import axios from 'axios';
//import Uploady from "@rpldy/uploady";

const CLOUD_NAME = "dwuo25yqj",
  UPLOAD_PRESET = "messenger";
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
  }
}));


const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  }


  const handleImageChange = (e) => {
    //setImages(e.target.files[0])
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "messenger"); // Replace the preset name with your own

    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    axios.post("https://api.cloudinary.com/v1_1/dwuo25yqj/upload", formData
    ).then(response => {
      const data = response.data;
      const fileURL = data.secure_url // You should store this URL for future references in your app
      setUrl(fileURL);
      console.log(data);
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      attachments: [url],
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
              // style={{ display: 'none' }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" className={classes.button}>
                <ContentCopyIcon />
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

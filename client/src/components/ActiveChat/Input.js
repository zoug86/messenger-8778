import React, { useState, useEffect } from "react";
import { FormControl, FilledInput, InputAdornment, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import axios from 'axios';


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
  },
  imgName: {
    marginLeft: "10px",
    marginRight: "10px",
  }
}));


const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [urls, setUrls] = useState([]);
  const [files, setFiles] = useState([]);

  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleImageChange = (e) => {
    const newFiles = e.target.files;
    setFiles([...newFiles]);
  }
  let links = [];
  useEffect(() => {
    files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "messenger");
      return axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`, formData
      ).then(response => {
        const data = response.data;
        const fileURL = data.secure_url
        links.push(fileURL)
      })
    })
    setUrls(links);
  }, [files])

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
    setText("");
    setFiles([])
    setUrls([])
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
              <Button component="span" className={classes.uploadBtn}>
                {files?.map((file, i) => (
                  <Typography key={i} className={classes.imgName}> {file.name} </Typography >
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

import React from "react";
import Poster from "../Poster";

const SenderBubble = (props) => {
  const { time, text, attachments } = props;
  return (
    <Poster text={text} attachments={attachments} time={time} other={false} />
  );
};

export default SenderBubble;

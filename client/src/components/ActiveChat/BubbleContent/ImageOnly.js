import React from "react";
import { Box, Typography } from "@material-ui/core";
import bubbleStyles from "./styles";

const ImageOnly = ({ time, attachments }) => {
  const classes = bubbleStyles();
  return (
    <>
      <Typography className={classes.date}>{time}</Typography>

      {attachments?.map((image) => (
        <img
          key={image}
          src={image}
          height="150px"
          alt=""
          className={classes.image}
        />
      ))}
    </>
  );
};

export default ImageOnly;

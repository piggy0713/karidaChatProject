import React from "react";
import { Box, Typography } from "@material-ui/core";
import bubbleStyles from "./styles";

const ImageWithText = ({ text, time, attachments }) => {
  const classes = bubbleStyles();
  return (
    <>
      <Typography className={classes.date}>{time}</Typography>
      <Box lineHeight={1} className={classes.bubble}>
        {attachments?.map((image) => (
          <img
            key={image}
            src={image}
            width="100%"
            height="120px"
            alt={image}
            className={classes.imageWithText}
          />
        ))}

        <Typography className={classes.text}>{text}</Typography>
      </Box>
    </>
  );
};

export default ImageWithText;

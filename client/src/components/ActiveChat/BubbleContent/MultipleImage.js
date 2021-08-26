import React from "react";
import { Box, Typography } from "@material-ui/core";
import bubbleStyles from "./styles";

const MultipleImage = ({ text, time, attachments }) => {
  const classes = bubbleStyles();
  return (
    <>
      <Box textAlign="right" className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
      <Box className={classes.bubble}>
        <Box display="flex">
          {attachments?.map((image) => (
            <img
              key={image}
              src={image}
              height="90px"
              width="100%"
              alt={image}
              className={classes.image}
            />
          ))}
        </Box>
      </Box>
      <Box textAlign="right">
        <Typography className={classes.date}>{time}</Typography>
      </Box>
    </>
  );
};

export default MultipleImage;

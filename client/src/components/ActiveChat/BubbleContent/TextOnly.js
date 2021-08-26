import React from "react";
import { Box, Typography } from "@material-ui/core";
import bubbleStyles from "./styles";

const TextOnly = ({ time, text }) => {
  const classes = bubbleStyles();
  return (
    <>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>
    </>
  );
};

export default TextOnly;

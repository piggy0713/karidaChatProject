import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  image: {
    height: "100px",
  },
  images: {
    height: "60px",
    padding: theme.spacing(1),
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  return (
    <Box className={classes.root}>
      {attachments === null ? (
        <>
          <Typography className={classes.date}>{time}</Typography>
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        </>
      ) : attachments.length > 1 ? (
        <Box className={classes.bubble}>
          <Box textAlign="right">
            <Typography className={classes.text}>{text}</Typography>
          </Box>
          <Box display="flex">
            {attachments?.map((image) => (
              <Box textAlign="center" key={image}>
                <img src={image} alt="" className={classes.images} />
              </Box>
            ))}
          </Box>
          <Box textAlign="right">
            <Typography className={classes.date}>{time}</Typography>
          </Box>
        </Box>
      ) : (
        <>
          <Typography className={classes.date}>{time}</Typography>
          <Box className={classes.bubble}>
            {attachments?.map((image) => (
              <Box textAlign="center" key={image}>
                <img src={image} alt="" className={classes.image} />
              </Box>
            ))}
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SenderBubble;

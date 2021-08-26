import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import TextOnly from "./BubbleContent/TextOnly";
import MultipleImage from "./BubbleContent/MultipleImage";
import ImageWithText from "./BubbleContent/ImageWithText";
import ImageOnly from "./BubbleContent/ImageOnly";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

const SenderBubble = (props) => {
  const classes = useStyles();
  const { time, text, attachments } = props;
  return (
    <Box className={classes.root}>
      {!attachments ? (
        <TextOnly time={time} text={text} />
      ) : attachments.length > 1 ? (
        <MultipleImage time={time} text={text} attachments={attachments} />
      ) : text !== "" ? (
        <ImageWithText time={time} text={text} attachments={attachments} />
      ) : (
        <ImageOnly time={time} attachments={attachments} />
      )}
    </Box>
  );
};

export default SenderBubble;

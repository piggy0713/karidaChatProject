import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import bannerImg from "../../assets/images/bg-img.png";
import { ReactComponent as BubbleSvg } from "../../assets/images/bubble.svg";
import { SvgIcon } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `linear-gradient( rgba(58, 141, 255, 0.85) , rgba(134, 185, 255, 0.85)), url(${bannerImg})  `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    textAlign: "center",
    paddingTop: "25vh",
    boxSizing: "border-box",
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  bubbleIcon: {
    fontSize: "6rem",
  },
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Box lineHeight={6} className={classes.root}>
      <SvgIcon className={classes.bubbleIcon} viewBox="0 0 67 67">
        <BubbleSvg />
      </SvgIcon>

      <Typography variant="subtitle1" color="secondary">
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default SideBanner;

import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    padding: theme.spacing(4),
  },
}));

const FormHeading = ({ headingText, headingBtnText, link }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="flex-end"
      alignItems="center"
      className={classes.heading}
    >
      <Typography variant="body2">{headingText}</Typography>
      <Box py={1} pl={3}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push(link)}
        >
          {headingBtnText}
        </Button>
      </Box>
    </Grid>
  );
};

export default FormHeading;

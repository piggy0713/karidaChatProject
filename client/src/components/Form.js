import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";

const Form = ({
  submitHandler,
  title,
  submitBtnText,
  isSignupForm,
  errorMessages,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8} md={7}>
          <Box mt={10}>
            <Typography variant="h5">{title}</Typography>
          </Box>
          <FormControl margin="normal" required fullWidth>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
            />
          </FormControl>
        </Grid>
        {isSignupForm ? (
          <>
            <Grid item xs={8} md={7}>
              <FormControl margin="normal" required fullWidth>
                <TextField
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                />
              </FormControl>
            </Grid>
            <Grid item xs={8} md={7}>
              <FormControl
                margin="normal"
                required
                fullWidth
                error={!!errorMessages?.confirmPassword}
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                />
                <FormHelperText>
                  {errorMessages?.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={8} md={7}>
              <FormControl
                margin="normal"
                required
                fullWidth
                error={!!errorMessages?.confirmPassword}
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                />
                <FormHelperText>
                  {errorMessages?.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
          </>
        ) : (
          <Grid item xs={8} md={7}>
            <FormControl margin="normal" required fullWidth>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
          </Grid>
        )}

        <Grid item xs={8} md={7}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={1}
            mt={4}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disableElevation
            >
              {submitBtnText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;

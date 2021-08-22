import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Hidden } from "@material-ui/core";
import SideBanner from "./components/Sidebar/SideBanner";
import FormHeading from "./components/Sidebar/FormHeading";
import { register } from "./store/utils/thunkCreators";
import Form from "./components/Form";

const Login = (props) => {
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={false} sm={5}>
        <Hidden xsDown>
          <SideBanner />
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={7}>
        <FormHeading
          headingText="Already have an account?"
          headingBtnText="Login"
          link="/login"
        />
        <Form
          submitHandler={handleRegister}
          title="Create an account."
          submitBtnText="Create"
          isSignupForm={true}
          errorMessages={formErrorMessage}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

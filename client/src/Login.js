import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Hidden } from "@material-ui/core";
import FormHeading from "./components/Sidebar/FormHeading";
import SideBanner from "./components/Sidebar/SideBanner";
import { login } from "./store/utils/thunkCreators";
import Form from "./components/Form";

const Login = (props) => {
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
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
          headingText="Don't have an account?"
          headingBtnText="Create Account"
          link="/register"
        />
        <Form
          submitHandler={handleLogin}
          title="Welcome Back!"
          submitBtnText="Login"
          isSignupForm={false}
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
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

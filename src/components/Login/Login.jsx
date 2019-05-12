import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import { handleInput, login } from "../../redux/Actions";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  formErrors: {
    color: "red"
  }
});

function SignIn(props) {
  const { classes, errors, submitting } = props;

  const onHandleInputClicked = e => {
    const { onHandleInput } = props;
    onHandleInput({ type: e.target.name, value: e.target.value });
  };

  const onSubmit = e => {
    const { onLogin, email, password } = props;
    onLogin(email, password);
    e.preventDefault();
  };

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onHandleInputClicked}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onHandleInputClicked}
            />
          </FormControl>
          <FormLabel className={classes.formErrors} name="Errors">
            {errors}
          </FormLabel>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            {submitting ? (
              <CircularProgress color="white" size={25} />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool,
  onHandleInput: PropTypes.func.isRequired,
  errors: PropTypes.string
};

SignIn.defaultProps = {
  isLoggedIn: false,
  errors: ""
};

export const mapStateToProps = ({
  currentUser: {
    submitting,
    isLoggedIn,
    errors,
    credentials: { email, password }
  }
}) => ({
  submitting,
  isLoggedIn,
  errors,
  email,
  password
});

export const mapDispatchToProps = dispatch => ({
  onHandleInput: ({ type, value }) => dispatch(handleInput({ type, value })),
  onLogin: (email, password) => dispatch(login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignIn));

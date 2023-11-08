import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
  welcomeText: {
    margin: theme.spacing(2),
  },
}));

function Auth() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper elevation={3}>
        <Typography variant="h5" component="h2" className={classes.welcomeText}>
          {isAuthenticated ? `Welcome ${user.email}` : 'Welcome to Auth App'}
        </Typography>
        {isAuthenticated ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => logout({ returnTo: window.location.origin })}
            className={classes.button}
          >
            Log Out
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => loginWithRedirect()}
            className={classes.button}
          >
            Log In
          </Button>
        )}
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Paper>
    </Container>
  );
}

export default Auth;

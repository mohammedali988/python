import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: 'center',
    justifyContent: 'center',
    padding: '30px',
    width: '500px',
  },
  box: {
    marginTop: 50,
    marginBottom: 50,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typo: {
    marginBottom: '30px !important',
    color: '#673ab7',
  },
  textField: {
    marginBottom: '30px !important',
  },
  btn: {
    marginBottom: '30px !important',
    border: 'none !important',
    height: '50px',
  },
}));

const LogIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hundleChange = (e) => {
    setEmail(e.target.value);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    const user = {
      email: email,
      password: password,
    };
    axios
      .post('http://localhost:8000/task/logIn', user)
      .then((res) => {
        if (res.data.jwt) {
          localStorage.setItem('user', res.data.jwt);
          window.location.href = '/allMembers';
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <Box className={classes.box}>
          <Paper className={classes.paper}>
            <AccountCircleIcon fontSize="large" style={{ color: '#673ab7' }} />
            <Typography variant="h4" className={classes.typo}>
              Hi, Welcome Back{' '}
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              style={{
                backgroundColor: '#fafafa',
                color: '#616161 !important',
              }}
              className={classes.btn}
            >
              <GoogleIcon
                fontSize="large"
                style={{ color: '#673ab7', marginRight: '12px' }}
              />
              Sign In with Google
            </Button>
            <Divider style={{ marginBottom: '30px' }} />
            <Typography variant="h5" className={classes.typo}>
              Sign In with email Adress
            </Typography>
            <TextField
              fullWidth
              required
              type="email"
              label="email adress"
              className={classes.textField}
              variant="outlined"
              onChange={hundleChange}
            />
            <TextField
              fullWidth
              required
              label="password"
              type="password"
              className={classes.textField}
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="outlined"
              style={{ backgroundColor: '#673ab7', color: 'white ' }}
              className={classes.btn}
              type="submit"
            >
              {' '}
              Log in{' '}
            </Button>
          </Paper>
        </Box>
      </form>
    </>
  );
};

export default LogIn;

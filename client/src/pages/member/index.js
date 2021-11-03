import React from 'react';
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  TextareaAutosize,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  box: {
    margin: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '80%',
    height: '80%',
  },
  TextField: {
    margin: '20px !important',
  },
  div: {
    margin: 20,
    marginLeft: '110px',
    width: '80%',
    height: '270px',
    border: '1px solid black',
    borderRadius: '8px',
  },
  btn: {
    margin: 20,
    marginLeft: '110px !important',
    height: '50px',
    width: '120px',
  },
  textArea: {
    width: '500px',
    margin: '20px',
  },
  label: {
    display: 'block',
    margin: '10px 0',
    color: 'green',
    fontSize: '14px',
  },
});

const Member = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Paper>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                className={classes.TextField}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                className={classes.TextField}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                className={classes.TextField}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                className={classes.TextField}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                className={classes.TextField}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                className={classes.TextField}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                className={classes.TextField}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                className={classes.TextField}
              />
            </Grid>
            <Grid item xs={4}>
              <div className={classes.div}></div>
              <Button variant="outlined" className={classes.btn}>
                chose File
              </Button>
            </Grid>
            <Grid item xs={6}>
              <label className={classes.label}>Note </label>
              <TextareaAutosize className={classes.textArea} minRows={6} />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Member;

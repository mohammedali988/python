import React from 'react';
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  TextareaAutosize,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Stack,
  Typography,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import useStyles from './style';

const Member = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Paper className={classes.paper}>
          <Grid container spacing={8}>
            <Grid item xs={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                size="small"
                className={classes.TextField}
              />
              <FormControl fullWidth className={classes.menu} size="small">
                <InputLabel id="demo-simple-select-label">country</InputLabel>
                <Select
                  // value={age}
                  label="country"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl component="fieldset" className={classes.radio}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                variant="outlined"
                label="Phne Number"
                size="small"
                className={classes.TextField}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                size="small"
                className={classes.TextField}
              />
              <FormControl fullWidth className={classes.menu} size="small">
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  // value={age}
                  label="City"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <div className={classes.date}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Date desktop"
                      inputFormat="MM/dd/yyyy"
                      // value={value}
                      // onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <TextField
                fullWidth
                variant="outlined"
                label="test"
                size="small"
                className={classes.TextField}
              />
            </Grid>
            <Grid item xs={4}>
              <div className={classes.div}></div>
              <Button variant="outlined" className={classes.btn}>
                chose File
              </Button>
              <Typography className={classes.typo}>name of file</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <label className={classes.label}> Note: </label>
              <TextareaAutosize minRows={6} className={classes.area} />
              <br />
              <label className={classes.label}> Member Status </label>
              <Checkbox className={classes.check} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <Button variant="outlined" className={classes.btn1}>
                {' '}
                save{' '}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button variant="outlined" className={classes.btn1}>
                View All Member
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Member;

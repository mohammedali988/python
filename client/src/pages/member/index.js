import React, { useEffect } from 'react';
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
import { useState } from 'react';
import useStyles from './style';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Member = () => {
  const classes = useStyles();
  const [src, setSrc] = useState('');
  const [renderImage, setRenderImage] = useState('');
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNo, setPhoneNo] = useState(0);
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [active, setActive] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleImgeChange = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    setSrc(event.target.files[0]);

    reader.onload = (e) => {
      setRenderImage(e.target.result);
      console.log(e.target.result);
    };
  };
  const hundleChange = (e) => {
    setSelectedCountry(e.target.value);
    axios
      .get(`http://localhost:8000/task/fetch-city/${e.target.value}`)
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/task/country')
      .then((res) => setCountry(res.data))
      .catch((err) => console.log(err));
  }, []);

  const hundleSubmit = (e) => {
    e.preventDefault();
    const memberData = new FormData();
    memberData.append('firstName', firstName);
    memberData.append('lastName', lastName);
    memberData.append('gender', gender);
    memberData.append('dateOfBirth', dateOfBirth);
    memberData.append('phoneNo', phoneNo);
    memberData.append('notes', notes);
    memberData.append('active', active);
    memberData.append('emailAddress', email);
    memberData.append('image', src);
    memberData.append('country', selectedCountry);
    memberData.append('city', selectedCity);

    axios
      .post('http://localhost:8000/task/Member', memberData)
      .then((res) => {
        window.location.href = '/member';
        setSrc(res.data.image);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(memberData, 'hiiiiiiiii');
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={hundleSubmit}>
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
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <FormControl fullWidth className={classes.menu} size="small">
                  <InputLabel>country</InputLabel>
                  <Select
                    value={selectedCountry}
                    label="country"
                    onChange={hundleChange}
                  >
                    {country.map((e) => {
                      return (
                        <MenuItem key={e[0]} value={e[0]}>
                          {e[1]}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl component="fieldset" className={classes.radio}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                    onChange={(e) => setGender(e.target.value)}
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
                  label="Phone Number"
                  size="small"
                  className={classes.TextField}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Last Name"
                  size="small"
                  className={classes.TextField}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <FormControl fullWidth className={classes.menu} size="small">
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    value={selectedCity}
                    label="City"
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {city.map((e) => {
                      return (
                        <MenuItem key={e[0]} value={e[0]}>
                          {e[1]}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <div className={classes.date}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        label="Birth date"
                        inputFormat="MM/dd/yyyy"
                        value={dateOfBirth}
                        onChange={(newValue) => {
                          setDateOfBirth(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
                <TextField
                  fullWidth
                  type="email"
                  variant="outlined"
                  label="Email Address"
                  size="small"
                  className={classes.TextField}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <div className={classes.div}>
                  <img src={renderImage} alt="photo" className={classes.img} />
                </div>
                <div className={classes.input}>
                  <input
                    type="file"
                    id="myfile"
                    name="myfile"
                    onChange={handleImgeChange}
                    className={classes.fix}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <label className={classes.label}> Note: </label>
                <TextareaAutosize
                  minRows={6}
                  className={classes.area}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <br />
                <label className={classes.label}> Member Status </label>
                <Checkbox
                  className={classes.check}
                  onChange={(e) => setActive(e.target.checked)}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  className={classes.btn1}
                  type="submit"
                >
                  {' '}
                  save{' '}
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Link to="/allMembers" style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" className={classes.btn1}>
                    View All Member
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </form>
    </>
  );
};

export default Member;

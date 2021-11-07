import React, { useEffect, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Tables from '../../components/table';
import AddIcon from '@mui/icons-material/Add';
import useStyles from './style';
import axios from 'axios';

const AllMembers = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/task/Member')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Box className={classes.box}>
        <Paper elevation={3} className={classes.paper}>
          <Link to="/member">
            <Button className={classes.btn} variant="outlined">
              <AddIcon className={classes.icon} />
              Add Member
            </Button>
          </Link>
          {console.log(data, 'byyyyyyyyyyyyyy')}
          <Tables data={data} />
          <br />
        </Paper>
      </Box>
    </>
  );
};

export default AllMembers;

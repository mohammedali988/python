import React from 'react';
import { Box, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Tables from '../../components/table';
import AddIcon from '@mui/icons-material/Add';

const useStayles = makeStyles({
  box: {
    marginTop: 100,
    marginBottom: 50,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    width: '80%',
    padding: '20px',
  },
  btn: {
    float: 'right',
    width: '230px',
    height: '50px',
    marginBottom: '20px !important',
    backgroundColor: '#1e88e5 !important',
    color: 'white !important',
  },
  icon: {
    marginRight: '10px',
  },
});

const AllMembers = () => {
  const classes = useStayles();
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
          <Tables />
          <br />
        </Paper>
      </Box>
    </>
  );
};

export default AllMembers;

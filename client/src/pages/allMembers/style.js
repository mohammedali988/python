import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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

export default useStyles;

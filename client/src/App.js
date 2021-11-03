import './App.css';
import LogIn from './pages/logIn';
import Member from './pages/member';
import AllMembers from './pages/allMembers';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <LogIn exact path="/logIn" />
          <Member exact path="/member" />
          <AllMembers exact path="/allMembers" />
        </Switch>
      </Router>
    </>
  );
}

export default App;

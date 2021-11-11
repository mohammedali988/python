import './App.css';
import LogIn from './pages/logIn';
import Member from './pages/member';
import AllMembers from './pages/allMembers';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Test from './pages/test';

const user = localStorage.getItem('user');
// comment 
function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        {!user ? (
          <LogIn exact path="/" />
        ) : (
          <Switch>
            <LogIn exact path="/" />
            <Member exact path="/member" />
            <AllMembers exact path="/allMembers" />
            <Test exact path="/test" />
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;

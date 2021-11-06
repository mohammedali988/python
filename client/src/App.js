import './App.css';
import LogIn from './pages/logIn';
import Member from './pages/member';
import AllMembers from './pages/allMembers';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

console.log(document.cookie, 'hiiiiiiiii');
const user = localStorage.getItem('user');

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
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;

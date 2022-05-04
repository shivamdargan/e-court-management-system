import './App.css';
import Landing from './pages/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/LoginPage.js';
import Signuppage from './pages/SignupPage';
import SignupLawyerPage from './pages/SignupLawyerPage';
import DashboardPage from './pages/DashboardPage';
import EfillingPage from './pages/EfillingPage';
import CasesPage from './pages/CasesPage.js';
import Case from './components/Dashboard/Case';
import ProfilePage from './pages/ProfilePage';
import CaseTrackPage from './pages/caseTrackingPage';

function App() {
  return (
    <div className="App">
   <Router>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signuppage></Signuppage>
            </Route>
            <Route path="/signuplawyer">
              <SignupLawyerPage/>
            </Route>
            <Route path="/dashboard">
             <DashboardPage/>
            </Route>
            <Route path="/efiling">
             <EfillingPage/>
            </Route>
            <Route path="/cases">
              <CasesPage/>
            </Route>
            <Route path="/caseDetails/:cnr">
              <Case/>
            </Route>
            <Route path="/profile">
              <ProfilePage/>
            </Route>
            <Route path="/tracker">
              <CaseTrackPage/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

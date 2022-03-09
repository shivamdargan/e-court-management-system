import logo from './logo.svg';
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
import SignupJudgePage from './pages/SignupJudgePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route eaxct path="/" element={<Landing/>}>
          <Route  path="/login" element={<Login/>} />
 
        </Route>
      </Routes>
    </BrowserRouter> */}
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
          </Switch>
        </Router>
    </div>
  );
}

export default App;

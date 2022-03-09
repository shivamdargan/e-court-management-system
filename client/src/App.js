import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/LoginPage.js';
import Signuppage from './pages/SignupPage';
import SignupLawyerPage from './pages/SignupLawyerPage';
import SignupJudgePage from './pages/SignupJudgePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route eaxct path="/" element={<Landing/>}>
          <Route eaxct path="/login" element={<Login/>} />
          {/* <Route path="" element={} />
          <Route path="" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

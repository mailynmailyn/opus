import './App.css';
import NavbarO from './assets/NavbarO.js'
import About from './About';
import Profile from './Profile';
import Login from './Login.js';
import SignUp from './SignUp';
import Sakamoto from './Sakamoto';
import SKMTReview from './SakamotoReview';
import Home from './Home';

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path= '/' element={<Home />} /> 
      <Route path='/homepage' element={<Home />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
      <Route path= '/login' element={<Login />} />
      <Route path= '/signup' element={<SignUp />} />
      <Route path= '/sakamoto' element={<Sakamoto />} />
      <Route path= '/sakamotoreviews' element={<SKMTReview />} />
    </Routes>
  </Router>
  );
}

export default App;

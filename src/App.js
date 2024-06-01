import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import LandingPage from "./views/landingPage/landingPage";
import NotFound from './views/signupPage/not-found';
import Signup01 from './views/signupPage/signup01';
import Signup2 from './views/signupPage/signup2';
import Signup3 from './views/signupPage/signup3';
import Signup4 from './views/signupPage/signup4';
import Signup5 from './views/signupPage/signup5';
import Signup6 from './views/signupPage/signup6';
import Signup7 from './views/signupPage/signupp7';
import Signup12 from "./views/signupPage/signup12";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element ={<LandingPage/>} />
        <Route path="/landingPage" element ={<LandingPage/>} />
        <Route path="/signup01" element={<Signup01/>} />
        <Route path="/signup2" element={<Signup2/>} />
        <Route path="/signup3" element={<Signup3/>} />
        <Route path="/signup4" element={<Signup4/>} />
        <Route path="/signup5" element={<Signup5/>} />
        <Route path="/signup6" element={<Signup6/>} />
        <Route path="/signup7" element={<Signup7/>} />
        <Route path="/signup12" element={<Signup12/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

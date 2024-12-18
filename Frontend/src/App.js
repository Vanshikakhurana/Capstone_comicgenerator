import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import PublishPage from './components/PublishPage'; // Import PublishPage
import Home from './components/Home';
import Login from './components/Login';
import Reset  from './components/Reset';
import IntroPage from './components/Intro';
import DashboardPage from './components/Dashboard';
import Community from './components/Community';
import Comic from './components/Comics';
import Popular from './components/popular';
import Liked from './components/Liked';
import New from './components/New';
import Fantasy from './components/Fantasy';
import Adventure from './components/Adventure';
import Romance from './components/Romance';
import Mystery from './components/Mystery';
import Horror from './components/Horror';
import SciFi from './components/Sci-Fi';
import ProfilePage from "./components/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/community" element={<Community />} />
        <Route path="/user_comics" element={<Comic />} />
        <Route path="/publish" element={<PublishPage />} /> 
        <Route path="/popular" element={<Popular />} /> 
        <Route path="/liked" element={<Liked />} /> 
        <Route path="/new" element={<New />} /> 
        <Route path="/genre/fantasy" element={<Fantasy />} />
        <Route path="/genre/romance" element={<Romance />} />
        <Route path="/genre/adventure" element={<Adventure />} /> 
        <Route path="/genre/mystery" element={<Mystery />} /> 
        <Route path="/genre/horror" element={<Horror />} /> 
        <Route path="/genre/scifi" element={<SciFi />} /> 
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;



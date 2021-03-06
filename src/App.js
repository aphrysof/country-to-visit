import React from "react"
// import { createContext } from "react";
import './index.css'
import Homepage from "./pages/Homepage";
import Tovisit from "./pages/Tovisit";
import Visited from "./pages/Visited";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import {Routes, Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// export const ThemeContext = createContext('null');


function App() {
  return (
    
    <Routes>
      <Route path="/" exact element = {<Homepage />}/>
      <Route path="/Tovisit" element = {<Tovisit />}/>
      <Route path="/Visited" element = {<Visited />}/>
      <Route path="/Profile" element = {<Profile />}/>
      <Route path="/Settings" element = {<Settings />}/>
      <Route path ="/Signup" element = {<Signup />} />
      <Route path ="/Login" element = {<Login />} />
    </Routes>

   
  );
}

export default App;
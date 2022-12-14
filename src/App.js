import React, { useState } from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dasboard/Dasboard";
import Rutine from "./components/dasboard/Rutine";
import EditRutine from "./components/dasboard/EditRutine";
import TopicCompleteOrNot from "./components/dasboard/TopicCompleteOrNot";
import Resume from "./components/dasboard/Resume";
import Login from "./components/dasboard/user_auth/Login";
import Register from "./components/dasboard/user_auth/Register";

function App() {
  const [pass, setPass] = useState();
  console.log(pass);
  const passwordHandler = (props) => {
    // set localstorage
    // localStorage.setItem("password", JSON.stringify(props.password))
    setPass(props);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rutine" element={<Rutine />} />
          <Route path="/edit_rutine" element={<EditRutine />} />
          <Route path="/check_topic" element={<TopicCompleteOrNot />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/user_login/login" element={<Login />} />
          <Route
            path="/user_login/register"
            element={<Register passwordHandler={passwordHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

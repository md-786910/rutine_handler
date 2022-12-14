import React, { useState } from "react";
import Users from "./Users";
import { NavLink, useNavigate } from "react-router-dom";
function Register(props) {
  const navigate = useNavigate();

  // const [check, setCheck] = useState(false)
  // const [msg, setMsg] = useState("")

  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const setUserDetail = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitDetails = async (e) => {
    e.preventDefault();
    const { name, password } = user;

    // send user info App
    props.passwordHandler(user);

    try {
      if (!name || !password) {
        alert("Please enter");
      } else {
        const res = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name, password: password }),
        });
        const data = await res.json();

        if (res.status === 200) {
          alert("Successfully registered");
          navigate("/user_login/login");
        } else {
          console.log(data);
          alert("sorry password already -> registered");
          // code here
        }
      }
    } catch (error) {
      console.log("error registering user");
    }
  };

  return (
    <div className="">
      <Users />

      <div className="alert_page ">
        {/* {
                    check ? <div className="alert alert-success alert-dismissible mx-auto fade show w-25" role="alert">
                        <strong>successFully!</strong> {msg}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> : ""
                } */}
      </div>

      <div className="p-4 title">
        <h1 className="text-white text-center">
          Register{" "}
          <span>
            <i className="fa fa-users"></i>
          </span>
        </h1>
      </div>
      <form method="post" className="form-control m-auto w-50 p-5">
        <div className="mb-1">
          <label for="exampleFormControlInput1" className="form-label">
            Name{" "}
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            id="exampleFormControlInput1"
            placeholder="john man.."
            onChange={setUserDetail}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Password : <span classNameName="text-danger">max lenght 10</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={user.password}
            id="exampleFormControlInput1"
            placeholder="123"
            maxlength="10"
            onChange={setUserDetail}
            required
          />
        </div>
        <button className="btn btn-primary fs-5" onClick={submitDetails}>
          Register
          <span>
            <i className="fa fa-user"></i>
          </span>
        </button>

        <NavLink to="/user_login/login">
          <button className="btn btn-outlined-light fs-5 mx-4">
            Login
            <span>
              <i className="fa fa-user"></i>
            </span>
          </button>
        </NavLink>
      </form>
    </div>
  );
}

export default Register;

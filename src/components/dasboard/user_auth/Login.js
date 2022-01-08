import React, { useState, useEffect } from 'react'
import Users from './Users'
import { NavLink, useNavigate } from "react-router-dom"

function Login(props) {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        password: "",
    })

    const setUserDetail = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const submitDetails = async (e) => {
        e.preventDefault()
        const { password } = user

        try {
            if (!password) {
                alert("Please enter password properly")
            }
            else {
                const res = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ password: password }),

                })
                const data = await res.json();

                if (res.status === 200) {
                    navigate("/")
                }
                else {
                    alert("Error from server: " + res.statusText)
                }
            }
        } catch (error) {
            console.log("login error")
        }
    }

    return (
        <div className="" >
            <Users />
            <div className=" p-4 title">
                <h1 className="text-white text-center">
                    <span className="text-danger ">U - </span>Login
                    <span>
                        <i className="fa fa-users"></i>
                    </span>
                </h1>
            </div>
            <form method="post" className="form-control m-auto w-50 p-5">

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Password : <span classNameName="text-danger">max lenght 10</span></label>
                    <input type="text" name="password" className="form-control" id="exampleFormControlInput1" value={user.password} placeholder="123" maxlength="10" onChange={setUserDetail} />

                </div>
                <button className="btn btn-primary fs-5" onClick={submitDetails}> Login
                    <span>
                        <i className="fa fa-users"></i>
                    </span>
                </button>

                <NavLink to="/user_login/register">
                    <button className="btn btn-outlined-light fs-5 mx-4">Register
                        <span>
                            <i className="fa fa-user"></i>
                        </span>
                    </button>
                </NavLink>

            </form>
        </div>
    )
}

export default Login

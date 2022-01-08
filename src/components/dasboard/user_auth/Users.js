import React from 'react'
import { useNavigate } from 'react-router-dom'
import developer from "../images/user.jpeg"

function Users() {

    const navigate = useNavigate()

    return (
        <div className="con_box">
            <nav className="navbar navbar-expand-lg navbar-success bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand " style={{ fontSize: "30px", color: "white" }} href="/user_login/login">User Profile</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/user_login/login">Login</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/user_login/register">Register</a>
                            </li>

                            <li className="nav-item">
                                <button className="btn btn-success mx-3" onClick={
                                    () => navigate("/")
                                }>Logout</button>
                            </li>


                        </ul>
                        <form className="d-flex">

                            <button className="btn btn-outline-light" onClick={() => {
                                navigate("/")
                            }} type="submit">Back Home</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Users

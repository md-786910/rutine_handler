import React from 'react'
import "./css/style.css"
import { NavLink } from "react-router-dom"
function SideNav() {

    const activeClass = {
        color: "red",
        borderColor: "white"
    }

    return (
        <div id="mySidenav" className="sidenav">
            <p className="logo"><span>M</span>-Rutine Handler</p>

            <NavLink to="/" className="icon-a" active_class="navLink_sideBar"><i className="fa fa-chalkboard-teacher icons"></i> &nbsp;&nbsp;Dashboard</NavLink>

            <NavLink to="/rutine" active_class="navLink_sideBar" className="icon-a"><i className="fa fa-book icons"></i> &nbsp;&nbsp;Study Rutines</NavLink>

            <a href="https://www.github.com/md-786910" target="_blank" className="icon-a"><i className="fa fa-list icons"></i> &nbsp;&nbsp;Projects</a>

            <NavLink to="/resume" active_class="navLink_sideBar" className="icon-a"><i className="fa fa-file icons"></i> &nbsp;&nbsp;My Resume</NavLink>

            <NavLink to="/edit_rutine" active_class="navLink_sideBar" className="icon-a"><i className="fa fa-tasks icons"></i> &nbsp;&nbsp;Edit Rutine Settings</NavLink>

            <NavLink to="/check_topic" active_class="navLink_sideBar" className="icon-a"><i className="fa fa-edit icons"></i> &nbsp;&nbsp;Edit Topic Status</NavLink>

            <NavLink to="/user_login/login" active_class="navLink_sideBar" className="icon-a"><i className="fa fa-list-alt icons"></i> &nbsp;&nbsp;Users</NavLink>

        </div>
    )
}

export default SideNav

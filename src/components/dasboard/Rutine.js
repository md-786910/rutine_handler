import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import SideNav from "./SideNav"
import { fetchRutine } from '../../api/index'

import "./css/style.css"
import userIcon from "./images/user.png"
import Time from './Time'
import AlertToast from './AlertToast'

function Dasboard() {
    const [rutine, setRutine] = useState([])
    const [load, setLoad] = useState(false)

    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("")

    const showRutine = async () => {
        try {

            const data = await fetchRutine()
            if (data === undefined || data.length === 0) {
                setTitle("server error 404")
                setMessage(" please try again")
                setStatus("danger")
            } else {

                const result = data[data.length - 1]
                setTitle("successfully")
                setMessage("Rutine data fetch")
                setStatus("success")
                setRutine(result)
            }


            setLoad(true)

        } catch (error) {
            console.log("this is from rutine + setRutine", error)
        }
    }

    useEffect(() => {

        showRutine()
    }, [])



    return (
        <div>
            <SideNav />
            <div id="main">

                {/* header div */}
                <div className="head">
                    {/* title dashboard */}
                    <div className="col-div-6">
                        <span style={{ fontSize: "30px", cursor: "pointer", color: "white", display: "inline-block" }} className="nav"  >&#9776; Rutine</span>
                    </div>
                    {/* end */}

                    {/* time add here */}
                    <div className="time">
                        <span style={{ fontSize: "20px", cursor: "pointer", color: "white", display: "inline-block" }} className="nav"  > {<Time />}</span>
                    </div>
                    {/* end */}

                    {/* usericon  */}
                    <div className="col-div-6">
                        <div className="profile">
                            <img src={userIcon} className="pro-img" />
                            <p>Md Ashif Reza <span className="text-success " style={{ fontSize: "15px" }}>FULL STACK DEVELOPER</span></p>
                        </div>
                    </div>
                    {/* end */}

                    <div className="clearfix"></div>
                </div>
                {/* end */}

                <div className="clearfix">
                    <div className="alert">
                        <AlertToast title={title} message={message} status={status} />
                    </div>
                </div>
                <br />

                <div className="col-div-8">
                    <div className="box-8">
                        <div className="content-box">
                            <p>Rutine Status Handler <span><NavLink to="/edit_rutine" className="active_class">Edit Rutine</NavLink></span></p>
                            <br />
                            {
                                !load ? <h3 className="text-white text-center text-muted">Table is Loading ...</h3> :
                                    <table >
                                        <tr>
                                            <th>Time</th>
                                            <th >Sunday</th>
                                            <th >Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thrusday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>

                                        </tr>

                                        <tr style={{ border: '1px solid red' }}>
                                            <td className="text-info">Morning</td>
                                            {/* start rutine */}

                                            <td >{rutine.s1}</td>
                                            <td >{rutine.m1}</td>
                                            <td >{rutine.t1}</td>
                                            <td >{rutine.w1}</td>
                                            <td >{rutine.th1}</td>
                                            <td >{rutine.f1}</td>
                                            <td >{rutine.st1}</td>

                                        </tr>
                                        <tr>
                                            <td className="text-info">After Noon</td>
                                            {/* start rutine */}

                                            <td >{rutine.s2}</td>
                                            <td >{rutine.m2}</td>
                                            <td >{rutine.t2}</td>
                                            <td >{rutine.w2}</td>
                                            <td >{rutine.th2}</td>
                                            <td >{rutine.f2}</td>
                                            <td >{rutine.st2}</td>


                                        </tr>

                                        <tr>
                                            <td className="text-info">Evening</td>
                                            {/* start rutine */}

                                            <td >{rutine.s3}</td>
                                            <td >{rutine.m3}</td>
                                            <td >{rutine.t3}</td>
                                            <td >{rutine.w3}</td>
                                            <td >{rutine.th3}</td>
                                            <td >{rutine.f3}</td>
                                            <td >{rutine.st3}</td>


                                        </tr>

                                        <tr>
                                            <td className="text-info">Night</td>
                                            {/* start rutine */}

                                            <td >{rutine.s4}</td>
                                            <td >{rutine.m4}</td>
                                            <td >{rutine.t4}</td>
                                            <td >{rutine.w4}</td>
                                            <td >{rutine.th4}</td>
                                            <td >{rutine.f4}</td>
                                            <td >{rutine.st4}</td>

                                        </tr>



                                    </table>
                            }
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>
        </div >
    )
}

export default Dasboard


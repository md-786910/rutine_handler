import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import "./css/style.css"
import userIcon from "./images/user.png"

import { getTopic, githubUser, deleteTopic } from "../dasboard/../../api/index"


import SideNav from './SideNav'
import Time from './Time'
import AlertToast from './AlertToast'


function Dasboard() {
  const [load, setLoad] = useState(true)

  const [topic, setTopic] = useState([])

  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const [repo, setRepo] = useState()

  const showTopic = async () => {
    try {
      const data = await getTopic()
      const repo = await githubUser()
      if (data === undefined || data.length === 0) {

        setTitle("server error 404")
        setMessage(" please try again")
        setStatus("danger")
      } else {
        setTitle("successfully")
        setMessage("dashboard done")
        setStatus("success")
        setTopic(data)
      }
      setLoad(false)
      setRepo(repo)
    } catch (error) {
      console.error(error)
    }
  }

  // console.log(topic)

  useEffect(() => {
    showTopic()

  }, [])

  return (
    <div>

      <>
        <SideNav />
        <div id="main">

          {/* header div */}
          <div className="head">
            {/* title dashboard */}
            <div className="col-div-6">
              <span style={{ fontSize: "30px", cursor: "pointer", color: "white", display: "inline-block" }} className="nav"  >&#9776; Dashboard</span>
            </div>
            {/* end */}

            {/* time add here */}
            <div className="time">
              <Time />
            </div>
            {/* end */}

            {/* usericon  */}
            <div className="col-div-6">
              <div className="profile">
                <img src={userIcon} className="pro-img" />
                <p>Md Ashif Reza <span>FULL STACK DEVELOPER</span></p>
              </div>
            </div>
            {/* end */}

            <div className="clearfix"></div>
          </div>
          {/* end */}

          <div className="clearfix">
            <AlertToast title={title} message={message} status={status} />
          </div>

          <br />

          <div className="col-div-3">
            {/* fetch by github repo*/}
            <a href="https://www.github.com/md-786910" target="_blank">
              <div className="box">
                <p>{repo}<br /><span>All Projects</span></p>
                <i className="fa fa-tasks box-icon"></i>
              </div>
            </a>
          </div>

          <div className="col-div-3">
            <a href="">
              <div className="box">
                <p>6<br /><span>Problem/Day</span></p>
                <i className="fa fa-list box-icon"></i>
              </div>
            </a>
          </div>

          <div className="col-div-3">
            <div className="box">
              <p>244<br /><span>GeeksForGeeks</span></p>
              <i className="fa fa-times-circle box-icon"></i>
            </div>
          </div>
          <div className="col-div-3">
            <div className="box">
              <p>3 *<br /><span>Codechef</span></p>
              <i className="fa fa-star box-icon"></i>
            </div>
          </div>
          <div className="clearfix"></div>
          <br /><br />
          <div className="col-div-8">
            <div className="box-8">
              <div className="content-box">
                <p>Rutine Status Handler ➡ {

                  topic.length <= 0 ? 0 : topic.length

                } topic available

                  <span><NavLink to="/check_topic" role="button" className="active_class ">Sell All</NavLink></span></p>
                <br />
                <table>
                  <tr>
                    <th scope="col">serial no</th>
                    <th scope="col">Topic name</th>
                    <th scope="col">status</th>
                    <th scope="col">check</th>
                    <th scope="col">actions</th>
                  </tr>

                  {

                    load ? <h4 className="text-white text-center">Please wait...</h4> : topic.map((elem, index) => {

                      if (index < 4) {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{elem.topic}</td>
                            <td>{elem.status}</td>
                            <td>

                              {
                                elem.status === "Completed" ? <button className="btn  btn-success">
                                  done
                                </button> : <button className="btn  btn-warning" onClick={() => {
                                  // update code here
                                  alert("yes")

                                }}>
                                  update
                                </button>
                              }

                            </td>
                            <td>
                              <button className="btn btn-danger"
                                onClick={() => deleteTopic(`${elem._id}`)}

                              >
                                delete
                              </button>
                            </td>
                          </tr>
                        )
                      }
                    })
                  }
                </table>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </>

    </div >
  )
}

export default Dasboard


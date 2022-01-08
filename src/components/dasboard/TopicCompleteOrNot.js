import React, { useState, useEffect } from 'react'

import { getTopic, deleteTopic, updateStatus } from "../../api/index"
import AlertToast from './AlertToast'

function TopicCompleteOrNot({ password }) {

    const [topic, setTopic] = useState({
        topic_name: ""
    })

    const [load, setLoad] = useState(true)
    const [Topicmain, setTopicMain] = useState([])
    const [done, setDone] = useState("")

    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("")

    const setTopicChange = (e) => {

        const name = e.target.name
        const value = e.target.value
        setTopic({ ...topic, [name]: value })

    }
    const setTopicChangeSelect = (e) => {

        const value = e.target.value
        setDone({ name: value })

    }

    const sendTopic = async (e) => {
        e.preventDefault()

        const doneStatus = done.name
        const topicName = topic.topic_name
        if (!topicName) {
            alert("please provide a topic name")
        }
        else {
            try {

                const res = await fetch("http://localhost:5000/set_topic", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ topic: topicName, done: doneStatus, password: password })
                })
                const data = await res.json()

                if (res.status === 200) {
                    alert("do you want to add topic")
                    window.location.reload()
                }

            } catch (error) {
                console.log("error from set topic", error)
            }
        }

    }

    const showTopic = async () => {
        try {
            const res = await getTopic()
            if (res === undefined || res.length === 0) {

                setTitle("server error 404")
                setMessage(" please try again")
                setStatus("danger")
            } else {
                setTitle("successfully")
                setMessage("topic data fetch")
                setStatus("success")
                setTopicMain(res)
                setLoad(false)
            }


        } catch (error) {
            console.log("dont showing topic", error)
        }
    }

    useEffect(() => {
        showTopic()
    }, [])


    return (
        <div style={{ width: "90%", margin: "30px auto" }}>
            <div className="container_box">
                <h1 style={{ color: 'white' }}>
                    Add Topic For Study <span>
                        <i className="fa fa-trash"></i>
                    </span>
                </h1>

                <div className="alert">
                    <AlertToast title={title} message={message} status={status} />
                </div>
            </div>
            <div className="mt-4">
                <form action="" style={{ width: '100%' }}>
                    <div class="input-group flex-nowrap">

                        <input type="text" style={{ width: '98.5%', padding: '6px', fontSize: '20px' }} class="form-control" placeholder="Add Topic" aria-label="Username" name="topic_name" value={topic.topic_name} aria-describedby="addon-wrapping"
                            onChange={setTopicChange}
                        />
                    </div>

                    <div class="input-group mt-4">
                        <select class="form-select " id="inputGroupSelect01" style={{ width: '100%', padding: '6px', fontSize: '20px' }} onChange={setTopicChangeSelect} >
                            <option name="" selected disabled>Choose...</option>
                            <option name="check" value="Ongoing">Ongoing</option>
                            <option name="check" value="Completed">Completed</option>
                            <option name="check" value="Pending">Pending</option>
                        </select>
                    </div>
                    <button className="btn btn-primary mt-4" onClick={sendTopic} >
                        Add Topic <span>
                            <i className="fa fa-paper-plane"></i>
                        </span>
                    </button>
                </form>
            </div>
            <div className="titleTopicAll mt-4">
                <h1 style={{ color: 'white' }}>
                    Your Topic <span>
                        <i className="fa fa-tasks"></i>
                    </span>
                </h1>
            </div>
            <table className="table table-striped table-hover mt-4" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th scope="col">serial no</th>
                        <th scope="col">Topic name</th>
                        <th scope="col">status</th>
                        <th scope="col">check</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        load ? <h4>Loading data ...</h4> : Topicmain.map((elem, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{elem.topic}</td>
                                    <td>{elem.status}</td>
                                    <td>

                                        {
                                            elem.status === "Completed" ? <button className="btn  btn-success">
                                                done
                                            </button> : <button className="btn  btn-warning" onClick={() => updateStatus(elem)}>
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
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TopicCompleteOrNot

import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { updateStatus } from "../../api/index";
import AlertToast from "./AlertToast";
import { url } from "../../api/endpoint";
function TopicCompleteOrNot() {
  // const navigate = useNavigate()

  const [topic, setTopic] = useState({
    topic_name: "",
  });

  // call deleteFunction when the topic is deleted
  const [delteIndex, setDelteIndex] = useState();

  const [load, setLoad] = useState(true);
  const [Topicmain, setTopicMain] = useState([]);
  const [done, setDone] = useState("");

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const setTopicChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTopic({ ...topic, [name]: value });
  };
  const setTopicChangeSelect = (e) => {
    const value = e.target.value;
    setDone({ name: value });
  };

  const sendTopic = async (e) => {
    e.preventDefault();

    try {
      const doneStatus = done.name;
      const topicName = topic.topic_name;
      if (!topicName) {
        alert("please provide a topic name");
      }

      const res = await fetch(`${url}/set_topic`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: topicName, done: doneStatus }),
      });
      const data = await res.json();

      if (res.status === 200) {
        alert("do you want to add topic");
        showTopic();
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log("error from set topic", error);
      // navigate("/user_login/login")
    }
  };

  // delete topic
  const deleteTopic = async (index) => {
    try {
      // console.log(index)
      setDelteIndex(index);
      const res = await fetch(`${url}/deleteTopic`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index: index }),
      });
      const data = await res.json();

      if (res.status === 200) {
        // alert(data.msg)
        showTopic();
      } else {
        alert(res.statusText);
        console.log(data);
      }
    } catch (error) {
      console.log("error from delete topic", error);
    }
  };

  // fetch data from database
  const showTopic = async () => {
    try {
      const res = await fetch(`${url}/get_topic`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Accept: "application/json"
        },
        // credentials: "include"
      });
      const data = await res.json();
      if (res.status === 200) {
        const topicData = data[0].topic;
        setTopicMain(topicData);
        setLoad(false);

        // for alert message
        setTitle("succesfully");
        setMessage("fetch data");
        setStatus("success");
      } else {
        setTitle(res.msg);
        setMessage("unable to fetch data");
        setStatus("danger");
        console.log("error get topic data: " + res.status);
      }
    } catch (error) {
      console.log("error from index", error);
      // navigate("/user_login/login")
    }
  };

  useEffect(() => {
    showTopic();
  }, [delteIndex]);

  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <div className="container_box">
        <h1 style={{ color: "white" }}>
          Add Topic For Study{" "}
          <span>
            <i className="fa fa-trash"></i>
          </span>
        </h1>

        <div className="alert">
          <AlertToast title={title} message={message} status={status} />
        </div>
      </div>
      <div className="mt-4">
        <form action="" style={{ width: "100%" }}>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              style={{ width: "98.5%", padding: "6px", fontSize: "20px" }}
              class="form-control"
              placeholder="Add Topic"
              aria-label="Username"
              name="topic_name"
              value={topic.topic_name}
              aria-describedby="addon-wrapping"
              onChange={setTopicChange}
            />
          </div>

          <div class="input-group mt-4">
            <select
              class="form-select "
              id="inputGroupSelect01"
              style={{ width: "100%", padding: "6px", fontSize: "20px" }}
              onChange={setTopicChangeSelect}
            >
              <option name="" selected disabled>
                Choose...
              </option>
              <option name="check" value="Ongoing">
                Ongoing
              </option>
              <option name="check" value="Completed">
                Completed
              </option>
              <option name="check" value="Pending">
                Pending
              </option>
            </select>
          </div>
          <button className="btn btn-primary mt-4" onClick={sendTopic}>
            Add Topic{" "}
            <span>
              <i className="fa fa-paper-plane"></i>
            </span>
          </button>
        </form>
      </div>
      <div className="titleTopicAll mt-4">
        <h1 style={{ color: "white" }}>
          Your Topic{" "}
          <span>
            <i className="fa fa-tasks"></i>
          </span>
        </h1>
      </div>
      <table
        className="table table-striped table-hover mt-4"
        style={{ marginTop: "20px" }}
      >
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
          {load ? (
            <h4 style={{ color: "white" }}>Please wait...</h4>
          ) : (
            Topicmain.map((elem, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{elem.topic}</td>
                  <td>{elem.status}</td>
                  <td>
                    {elem.status === "Completed" ? (
                      <button className="btn  btn-success">done</button>
                    ) : (
                      <button
                        className="btn  btn-warning"
                        onClick={() => updateStatus(elem)}
                      >
                        update
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTopic(`${elem._id}`)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TopicCompleteOrNot;

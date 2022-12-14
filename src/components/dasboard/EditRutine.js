import React, { useState, useEffect } from "react";
import EditFrom from "./EditFrom";
import { url } from "../../api/endpoint";
const EditRutine = () => {
  const [rutine, setRutine] = useState({});
  const [count, setCount] = useState(1);
  const [load, setLoad] = useState(true);

  const setBtn = async () => {
    setCount(count + 1);

    const {
      s1,
      m1,
      t1,
      w1,
      th1,
      f1,
      st1,
      s2,
      m2,
      t2,
      w2,
      th2,
      f2,
      st2,
      s3,
      m3,
      t3,
      w3,
      th3,
      f3,
      st3,
      s4,
      m4,
      t4,
      w4,
      th4,
      f4,
      st4,
    } = rutine;
    try {
      const res = await fetch(`${url}/set_rutine`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          s1: s1,
          m1: m1,
          t1: t1,
          w1: w1,
          th1: th1,
          f1: f1,
          st1: st1,
          s2: s2,
          m2: m2,
          t2: t2,
          w2: w2,
          th2: th2,
          f2: f2,
          st2: st2,
          s3: s3,
          m3: m3,
          t3: t3,
          w3: w3,
          th3: th3,
          f3: f3,
          st3: st3,
          s4: s4,
          m4: m4,
          t4: t4,
          w4: w4,
          th4: th4,
          f4: f4,
          st4: st4,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        alert(data.msg);
      } else {
        alert(res.statusText);
      }
      // console.log(rutine)
    } catch (error) {
      console.log("come error to send rutine data to server " + error);
    }
  };

  const getRutineDetails = (props) => {
    setRutine(props);
    // setLoad(props.load)
  };

  /*---------i will work later on this part--------------*/

  // useEffect(() => {
  //     // if (localStorage.getItem("countData") === null) {

  //     localStorage.setItem("countData", JSON.stringify({ count: count }))
  //     // }
  //     // localStorage.setItem("countData", JSON.stringify({ count: count }))

  //     const data = JSON.parse(localStorage.getItem("countData"))
  //     setCount(data.count)
  // }, [count])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("countData"));
    if (data) {
      console.log(data);
      setCount(data.count);
    }
  }, []);

  return (
    <div class="container1">
      <div
        className="editTitle"
        style={{
          backgroundColor: "",
          paddingLeft: "20px",
          position: "fixed",
          top: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white", fontSize: "35px" }}>
          <i className="fa fa-tasks"></i>
          <span> Set Rutine</span>{" "}
        </h2>

        <div
          className="btnEdit"
          style={{ display: "flex", position: "relative", left: "100%" }}
        >
          <form>
            <button
              style={{
                color: "green",
                fontSize: "20px",
                margin: "10px",
                cursor: "pointer",
              }}
            >
              Update Rutine
            </button>
          </form>

          <div>
            <button
              style={{
                color: "red",
                fontSize: "20px",
                margin: "10px",
                cursor: "pointer",
              }}
              disabled
              onClick={() => setBtn()}
            >
              Set Rutine
            </button>
          </div>
        </div>
        {load ? <h2 style={{ color: "white" }}>please wait...</h2> : ""}
      </div>
      <div classname="mainTable " style={{ transform: "translateY(21%)" }}>
        <table
          class="table table-striped table-hover"
          style={{
            margin: "auto ",
            backgroundColor: "#2a2f4b",
            width: "96%",
            height: "80vh",
            overflowX: "scroll",
          }}
        >
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Sunday</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thrusday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <EditFrom getRutineDetails={getRutineDetails} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditRutine;

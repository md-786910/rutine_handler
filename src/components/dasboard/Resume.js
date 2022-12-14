import React, { useState, useEffect } from "react";
import { url } from "../../api/endpoint";
import resume1 from "./images/resume.pdf";
import { fetchResume } from "../dasboard/../../api/index";

function Resume() {
  const [resume, setResume] = useState(resume1);
  // const [dynamicResume, setDyanamicResume] = useState({})

  // onchange method to read resume in format of pdf
  const resumeSelect = (e) => {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      async function () {
        // convert image file to base64 string
        const img = reader.result;
        setResume(img);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const uplaodResume = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${url}/resume_uplaod`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resume: resume }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        alert("Resume Uplaod successfully");
      } else {
        alert(res.statusText);
      }
    } catch (error) {
      console.log("resune error: " + error);
    }
    prompt("Are You sure you want to uplaod Resume", true);
  };

  const showResume = async () => {
    const res = await fetchResume();
    if (res.length === 0) {
    } else {
      setResume(res[res.length - 1].resume);
      console.log(res.length);
    }
  };

  useEffect(() => {
    showResume();
  }, []);

  return (
    <div style={{ width: "90%", color: "white", margin: "20px auto" }}>
      <div className="title">
        <h1 style={{ fontSize: "35px" }}>
          My resume{" "}
          <span>
            <i className="fa fa-file"></i>
          </span>
        </h1>

        <div className="btnGroup">
          <a href={resume} download="resume">
            <button className="btn btn-primary ">Download Resume</button>
          </a>
          <a
            href="https://novoresume.com/editor"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-success mx-3 ">Edit Resume</button>
          </a>
          <form action="" style={{ display: "inline-block" }}>
            <input
              type="file"
              name="resume"
              style={{ border: "1px solid white" }}
              id="file"
              title="select resume"
              onChange={resumeSelect}
              accept="image/pdf"
            />
            <button className="btn btn-info mx-3" onClick={uplaodResume}>
              Upload Resume
            </button>
          </form>
        </div>
      </div>

      <div className="resume " style={{ height: "100vh" }}>
        <embed
          src={resume}
          style={{ height: "100vh", width: "100%" }}
          type="application/pdf"
        ></embed>
      </div>
    </div>
  );
}

export default Resume;

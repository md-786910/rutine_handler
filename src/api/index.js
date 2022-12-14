import { url } from "../api/endpoint";

// get topic from server
const getTopic = async () => {
  try {
    const res = await fetch(`${url}/get_topic`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 200) {
      const topicData = data[0].topic;
      return topicData;
    } else {
      return res.statusText;
    }
  } catch (error) {
    console.log("error from index", error);
  }
};
const githubUser = async () => {
  try {
    const res = await fetch("https://api.github.com/users/md-786910");
    const data = await res.json();
    const repo = data.public_repos;
    console.log(repo);
    return repo;
  } catch (error) {
    console.log("error from index", error);
  }
};
// githubUser()
// delete topic
const deleteTopic = async (index) => {
  try {
    console.log(index);
    const res = await fetch(`${url}/deleteTopic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index: index }),
    });
    const data = await res.json();

    if (res.status === 200) {
      alert(data.msg);
      window.location.reload();
    } else {
      alert(res.statusText);
    }
  } catch (error) {
    console.log("error from delete topic", error);
  }
};

// update topic status
const updateStatus = async (elem) => {
  try {
    const res = await fetch(`${url}/updateStatusTopic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ elem: elem.topic, index: elem._id }),
    });
    const data = await res.json();

    if (res.status === 200) {
      alert(data.msg);
      // window.location.reload()
    } else {
      alert(res.statusText);
    }
  } catch (error) {
    console.log("error from update status", error);
  }
};

const fetchResume = async () => {
  try {
    const res = await fetch(`${url}/get_resume`);
    const data = await res.json();
    // console.log(data)
    if (res.status === 200) {
      return data;
    } else {
      return res.statusText;
    }
  } catch (error) {
    console.log("error from index", error);
  }
};

// fetch rutine data
const fetchRutine = async () => {
  try {
    const res = await fetch(`${url}/rutine_data`);
    const data = await res.json();
    if (res.status === 200) {
      return data;
    } else {
      return res.status;
    }
  } catch (error) {
    console.log("error from rutine fetch", error);
  }
};

// when page is ready and show that

export {
  getTopic,
  githubUser,
  fetchResume,
  fetchRutine,
  deleteTopic,
  updateStatus,
};

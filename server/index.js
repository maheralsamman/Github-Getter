import express from "express";
import cors from 'cors';
import fetch from "node-fetch";

const app = express();
app.use(cors())
const PORT = 3001;
const githubLink = "https://api.github.com/users/"

const checkName = (userName) => {
  if (!userName) {
    return res.status(404).json({ error: `No userName has been provided` });
  }}

const fetchData = async (res, link, userName, error) => {
  const response = await fetch(link);
  const data = await response.json();
  if (!response.ok) {
    return res
      .status(404)
      .json({ error: `${error}${userName}` });
  }
  return res.status(200).json(data);
}

const getData = async (req, res) => {
  const userName = req.params.user;
  checkName(userName);

  try {
    const link = githubLink + userName
   await fetchData(res, link, userName, "No user found with name: ")
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Something went wrong, Try again later" });
  }
};

const getRepos = async (req, res) => {
  const userName = req.params.user;
  checkName(userName)

  try {

    const link = `${githubLink}${userName}/repos`
    await fetchData(res, link, userName, "No repos found for the user: ")

  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Something went wrong, Try again later" });
  }
};

// ENDPOINTS
app.get("/api/github/:user", getData);
app.get("/api/github/:user/repos", getRepos);

app.listen(PORT, console.log("server is connected 3001"));

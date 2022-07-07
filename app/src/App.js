import "./reset.css";
import "./App.css";
import { useState } from "react";
import Loading from "./components/Loading";
import Git from "./components/Git";
import Repo from "./components/Repo";

function App() {
  const github = "http://localhost:3001/api/github/";
  const [input, setInput] = useState("");
  const [gitData, setGitData] = useState({});
  const [gitRepos, setGitRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserData = (e) => {
    e.preventDefault();
    if (!input) return setGitData({ error: "You need to write a user name" });
    setLoading(true);
    fetch(`${github}${input}`)
      .then((res) => res.json())
      .then((data) => {
        setGitData(data);
      });
    fetch(`${github}${input}/repos`)
      .then((res) => res.json())
      .then((data2) => {
        setGitRepos(data2);
        setLoading(false);
        setInput("");
      });
  };
  return (
    <div className="repos-container">
      <h1 className="app__title">Github Getter</h1>

      <form className="form" onSubmit={getUserData} action="">
        <input
          className="form__input"
          onInput={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Github Username"
        />
        <button onClick={getUserData} className="form__button">
          Get Info & Repos
        </button>
      </form>

      <main className="gitDataContainer">
        {loading ? (
          <Loading loading={loading} />
        ) : gitData.error || gitRepos.error ? (
          <p className="error">{gitData.error}</p>
        ) : Object.keys(gitData).length ? (
          <div className="gitData">
            <Git gitData={gitData} />

            {Object.keys(gitRepos).length ? (
              <section className="repos">
                {gitRepos.map((repo) => (
                  <Repo key={repo.id} repo={repo} />
                ))}
              </section>
            ) : (
              <p className="repos__empty">The User Has No Repos</p>
            )}
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

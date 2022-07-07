import React from 'react'

const Repo = ({ repo }) => {
  return (
    <div className='repo'>
    <p className='repo__name'>Repos: {repo.name}</p>
    <a  className='repo__link' rel="noreferrer" target="_blank" href={repo.html_url}>Link to Repo</a>
    {repo.language && <p  className='repo__language'>Languages: {repo.language}</p>}
    <p  className='repo__Stars'>Stars gathered: {repo.stargazers_count}</p>
  </div>
  )  
  
}

export default Repo
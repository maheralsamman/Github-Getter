import React from 'react'

const Git = ({ gitData }) => {
  return (
    <section className="gitInfo">
    <h3 className='gitInfo__name hover'>Username: {gitData.login}</h3>
    <p className='gitInfo__id hover'>User ID: {gitData.id}</p>
    <a className='gitInfo__link hover' rel="noreferrer" target="_blank" href={gitData.html_url}>Link to github</a>
    <p className='gitInfo__date hover'>Created : {new Date(gitData.created_at).toLocaleDateString()}</p>
    <img  className='gitInfo__img' src={gitData.avatar_url} alt={gitData.html_url} />
  </section>
  )
}

export default Git
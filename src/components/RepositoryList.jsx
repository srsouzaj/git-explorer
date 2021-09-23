import { useState, useEffect, React } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository = {
  name: 'unform',
  description: 'Form in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem repository={repository} />
        })}
      </ul>
    </section>
  )
}
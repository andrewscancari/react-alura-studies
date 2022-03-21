import React from 'react';

function Lista() {
  const tarefas = [{
    nome: 'React',
    tempo: '02:00:00'
  }, {
    nome: 'Javascript',
    tempo: '01:00:00'
  }, {
    nome: 'Typescript',
    tempo: '03:00:00'
  }]
  return (
    <aside>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((tarefa, idx) => (
          <li key={idx}>
            <h3>
              {tarefa.nome}
            </h3>
            <span>
              {tarefa.tempo}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
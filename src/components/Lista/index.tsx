import React from 'react';
import Item from './Item';
import style from './Lista.module.scss';

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
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((tarefa, idx) => (
          <Item key={idx} {...tarefa}/>
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
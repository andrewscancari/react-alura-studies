import { Tarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

function Lista({ tarefas }: { tarefas: Array<Tarefa> }) {


  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((tarefa, idx) => (
          <Item key={idx} {...tarefa} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
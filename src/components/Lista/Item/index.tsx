import { Tarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

export default function Item({ nome, tempo, selecionado, completado, id }: Tarefa) {
  console.log('item atual: ', {nome, tempo, selecionado, completado, id});
  
  return (
    <li className={style.item}>
      <h3>
        {nome}
      </h3>
      <span>
        {tempo}
      </span>
    </li>
  );
}
import css from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li className={css.item}>
      {text}
    </li>
  );
};

export default TodoItem;
import css from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string, removeTodo: () => void }> = ({ text, removeTodo }) => {
  const removeHandler = () => {
    removeTodo();
  }
  return (
    <li className={css.item} onClick={removeHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
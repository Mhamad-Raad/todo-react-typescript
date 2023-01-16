import css from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string, id: string, removeTodo: (id: string) => void }> = ({ text,id, removeTodo }) => {
  const removeHandler = () => {
    removeTodo(id);
  }
  return (
    <li className={css.item} onClick={removeHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
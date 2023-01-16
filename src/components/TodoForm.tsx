import { useRef } from 'react';
import css from './TodoForm.module.css'

const TodoForm: React.FC<{addTodo: (enteredText: string) => void }> = ({addTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    console.log(typeof enteredText);

    if (enteredText?.trim().length === 0) {
      return;
    }

    addTodo(enteredText);
    inputRef.current!.value = '';
  }


  return (
    <form onSubmit={submitHandler} className={css.form}>
      <label htmlFor="text">Todo</label>
      <input ref={inputRef} type="text" id='text'/>
      <button type="submit">ADD TODO</button>
    </form>

  );
}

export default TodoForm
import { useRef } from 'react';

const TodoForm: React.FC<{addTodo: (enteredText: string) => void }> = ({addTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    addTodo(enteredText);
  }


  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo</label>
      <input ref={inputRef} type="text" id='text'/>
      <button type="submit">ADD TODO</button>
    </form>

  );
}

export default TodoForm
import { useRef } from 'react';

const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
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
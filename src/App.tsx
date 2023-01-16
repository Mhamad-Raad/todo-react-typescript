import Todos from './components/Todos';
import TodoClass from './Models/Todo';
import TodoForm from './components/TodoForm';

import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<TodoClass[]>([
    new TodoClass('Learn React'),
    new TodoClass('Learn TypeScript')
  ])

  const addTodoHandler = (Text: string) => {
    const newTodo = new TodoClass(Text)
    setTodos((prevState) => {
      return prevState.concat(newTodo)
    })
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;

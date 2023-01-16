import Todos from './components/Todos';
import TodoClass from './Models/Todo';
import TodoForm from './components/TodoForm';

import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<TodoClass[]>([])

  const addTodoHandler = (Text: string) => {
    const newTodo = new TodoClass(Text)
    setTodos((prevState) => {
      return prevState.concat(newTodo)
    })
  }

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;

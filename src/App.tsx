import Todos from './components/Todos';
import TodoClass from './Models/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const todos = [
    new TodoClass('Learn React'),
    new TodoClass('Learn TypeScript')
  ]

  const addTodoHandler = (Text: string) => {
    const newTodo = new TodoClass(Text)
    todos.push(newTodo)
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;

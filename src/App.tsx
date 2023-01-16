import Todos from './components/Todos';
import TodoClass from './Models/Todo'

function App() {
  const todos = [
    new TodoClass('Learn React'),
    new TodoClass('Learn TypeScript')
  ]
  return (
    <div className="App">
      <Todos items={['Learn React', 'Learn TypeScript']} />
    </div>
  );
}

export default App;

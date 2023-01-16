import TodoModel from '../Models/Todo'

const Todos: React.FC<{ items: TodoModel[] }> = (props) => {
  return (
    <ul>
      {props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  )
}


export default Todos
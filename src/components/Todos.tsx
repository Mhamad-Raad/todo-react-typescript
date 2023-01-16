import TodoModel from '../Models/Todo'
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: TodoModel[] }> = (props) => {
  return (
    <ul>
      {props.items.map(todo => <TodoItem key={todo.id} text={todo.text} />)}
    </ul>
  )
}


export default Todos
import TodoModel from '../Models/Todo'
import TodoItem from './TodoItem'
import css from './Todos.module.css'

const Todos: React.FC<{ items: TodoModel[], removeTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={css.todos} >
      {props.items.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} removeTodo={props.removeTodo} />)}
    </ul>
  )
}


export default Todos
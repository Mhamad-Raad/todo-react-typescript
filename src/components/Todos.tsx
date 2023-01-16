const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <ul>
      {props.items.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
  )
}


export default Todos
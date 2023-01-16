const TodoItem: React.FC <{text: string}>= ({text}) => {
  return (
    <li>
      {text}
    </li>
  );
};

export default TodoItem;
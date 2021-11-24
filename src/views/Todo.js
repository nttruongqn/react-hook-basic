import "./Todo.css";

const Todo = (props) => {
  const { todos, deleteDataTodo } = props;

    const handleDelete = (id) => {
        console.log("check id",id)
        alert('xoa');
        deleteDataTodo(id);
  };

  return (
    <div className="todo-container">
      {todos.map((todo) => {
        console.log("check todo", todos);
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
            <span onClick={() => handleDelete(todo.id)}> X </span>
          </li>
        );
      })}
      <hr></hr>
    </div>
  );
};

export default Todo;

import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { useState, useEffect } from "react";

function App() {
  //state
  const [name, setName] = useState("Truong");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "truong dang code",
      type: "ntt",
    },
    { id: "todo2", title: "truong dang choi game", type: "truong" },
    { id: "todo3", title: "truong dang di ngu", type: "ntt" },
  ]);

  const handleOnClick = () => {
    if (!address) {
      alert("empty input");
      return;
    }
    // setName(address);
    let newTodo = { id: "todon", title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChange = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setTodos(currentTodo);
  };

  useEffect(() => {
    console.log("run use effect");
  }, []);

  //re-render
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
        <Covid />
        {/* <Todo todos={todos}
        deleteDataTodo = { deleteDataTodo }
        />

        <Todo todos={todos.filter((item) => item.type === "truong")}
        deleteDataTodo = { deleteDataTodo }/>
        
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChange(event)}
        />
        <button
          type="button"
          className="btn"
          onClick={() => {
            handleOnClick();
          }}
        >
          Click me
        </button> */}
    

      </header>
    </div>
  );
}

export default App;

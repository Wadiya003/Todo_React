import React, { useState } from "react";
import ToDoItem from "./todo";

function App() {
  const [input, setinput] = useState("");
  const [todo, settodo] = useState([]);

  function getinput(event) {
    const getinput = event.target.value;
    setinput(getinput);
  }

  function addtodo() {
    settodo(prevtodo => {
      return [...prevtodo, input];
    });
    setinput("");
  }

  function deletetodo(id) {
    settodo(prevtodo => {
      return prevtodo.filter((item, yay) => {
        return yay!== id;
      });
    });
  }

  return (
    <div className="wrapper">
      <div className="heading">
        <h1>Today's List !</h1>
      </div>
      <div className="inputs">
        <input onChange={getinput} type="text" value={input} />
        <button  class="btns" onClick={addtodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todo.map((todoItem, yay) => (
            <ToDoItem
              id={yay}
              key={yay}
              text={todoItem}
              onChecked={deletetodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;



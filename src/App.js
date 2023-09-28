import "./App.css";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';

export  function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } 
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e) => {
        return e !== todo;
      }));
      console.log("delete", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc, payment, link) => {
    console.log("I am adding this todo", title, desc, payment, link);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } 
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      payment: payment,
      link: link,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
    
    </>
  );
}

export default App;

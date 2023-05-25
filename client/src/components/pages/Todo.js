import React from "react";
import "../Styles/Todo.css";
import { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import {addTodos, updateTodos, deleteTodos } from "../../services/Todb";
import config from '../../services/config.json';
import axios from 'axios';
const Todo = () => {
  const [todo, setTodo] = useState(""); // user entered data
  const [todos, setTodos] = useState([]); //to store the entered todo in an array
  const { editId, setEditid } = useState(0); //to store the id of edited 

   useEffect(()=>{
    fetchTodo();
   }, [todos]);


   const fetchTodo = async()=>{
    await axios.get(`${config.api_base_url}/api/task`)
    .then(({data})=>{
        console.log('data', data);
        // setTodo(data);
        setTodos( data);
    })
    .catch((error)=>{
        console.log(error);
    })
};


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //Adding todo into array,update and display
  const addTodo = () => {

   // connecting with backend
    addTodos(todo);
  };
  const onDelete = (id) => {
    deleteTodos(id);
  };
  //Complete the list
  const onComplete = (id) => {
    let complete = todos.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTodos(complete);
  };
  const onEdit = (id) => {
    const editTodo = todos.find((to) => to.id === id);
    console.log("editTodo.list", editTodo.list);
    setTodo(editTodo.list);
    // setEditid(editTodo.id);
    console.log("editTodo", editTodo);

    updateTodos(editId,todo, setTodos, setTodo, setEditid);
  };
  return (
    <div className="todo-header">
      <h1>Todo List App</h1>
      <form className="form-set" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="Enter your task"
          className="form-input"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button onClick={addTodo}>{editId ? "EDIT" : "ADD"}</button>
      </form>
      <div className="list">
        <ul>
          {todos.map((to) => (
            <li className="list-items">
              <div className="list-item-list" id={to.status ? "list-item" : ""}>
                {to.task}
              </div>
              <span>
                <IoMdDoneAll
                  className="list-item-icons"
                  id="complete"
                  title="Complete"
                  onClick={() => onComplete(to.id)}
                />
                <FiEdit
                  className="list-item-icons"
                  id="edit"
                  title="Edit"
                  onClick={() => onEdit(to.id)}
                />
                <MdDelete
                  className="list-item-icons"
                  id="delete"
                  title="Delete"
                  onClick={() => onDelete(to.id)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;

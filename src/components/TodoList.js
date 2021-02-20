import React from 'react';
import AddTodo from './AddTodo';
import {useSelector} from 'react-redux';

export default function TodoList() {
    const todos=useSelector((state)=>state.todoReducer)
    return(
        <div className="container">
            <AddTodo />
        <div classname="row">
            {  
              todos.map((item,i)=>
              <div className="alert alert-primary" align="center">
              <h2>{i+1}</h2>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              </div>
              )

            }
        </div>
        </div>
    )
}
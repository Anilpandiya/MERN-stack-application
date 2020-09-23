import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import ListToDo from './ListToDo';

const ToDo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=> {
        getTodos();
    })

    const getTodos = () => {
        axios.get('/api/todos')
            .then(res => {
                if(res.data){
                    setTodos(res.data)
                }
            })
            .catch(err => console.log(err))
    }

    const deleteTodo = (id) => {
        axios.delete(`api/todos/${id}`)
            .then(res => {
                if(res.data){
                    getTodos();
                }
            }) 
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>My Todo(s)</h1>
            <Input getTodos={getTodos}/>
            <ListToDo todos={todos} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default ToDo;

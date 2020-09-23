import React, { useState } from 'react';
import axios from 'axios';

const Input = ({ getTodos }) => {
    const [action, setAction] = useState("");

    const addTodo = () => {
        const task = { action: action };

        if(task.action && task.action.length > 0){
            axios.post('/api/todos', task)
                .then(res => {
                    if(res.data){
                        getTodos();
                        setAction("");
                    }
                })
                .catch(err => console.log(err))
        }else {
            console.log("input require")
        }
    }

    return(
        <div>
            <input type="text" onChange={(e) => setAction(e.target.value)} value={action}/>
            <button onClick={addTodo}>add todo</button>
        </div>
    )
}

export default Input;
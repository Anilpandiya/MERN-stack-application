import React from 'react'

const ListToDo = ({ todos, deleteTodo }) => {
    return(
        <div>
            <ul>
                {
                    todos && todos.length > 0 ?
                        (
                            todos.map(todo => {
                                return(
                                    <li key={todo._id} onClick={() => deleteTodo(todo._id)}>{todo.action}</li>
                                )
                            })
                        )
                        :
                        (
                            <li>No Todo(s) left</li>
                        )
                }
            </ul>
        </div>
    )
}

export default ListToDo;
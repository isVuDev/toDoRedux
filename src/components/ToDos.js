import React from 'react';

const ToDos = ({todo}) => (
    <div>
            <div> {todo.id} |  {todo.content} | {todo.completed.toString()} | {todo.read.toString()} </div>
    </div>
)

export default ToDos
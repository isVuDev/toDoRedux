import React from 'react';
let readStyle = {
    fontWeight: 'bold',
    color: 'blue'
};
const ToDos = ({item,onDeleteClick,onCompletedClick,onReadClick}) => (
    
    <div >
            <div style={(item.read) ? readStyle : {}} id={item.id} onClick={onReadClick}> {item.id} |  {item.content} | {item.completed.toString()}
            | {item.read.toString()} |</div>
            <button id={item.id} onClick={(onDeleteClick )}>Delete</button>
            <button id={item.id} onClick={onCompletedClick  }>Completed</button>
    </div>
)

export default ToDos
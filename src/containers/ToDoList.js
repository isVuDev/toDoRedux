


import React from 'react';
import {connect} from 'react-redux';
import ToDos from '../components/ToDos'

const mapStateToProps = state => {
    return {items: state.items};
};

const ToDo = ({items}) => (
    <div>
        {items.map(todo => (
            <ToDos key={todo.id} todo = { todo }/>
        ))}
    </div>
)

const ToDoList = connect (mapStateToProps)(ToDo)
export default ToDoList;
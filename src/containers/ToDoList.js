


import React from 'react';
import {connect} from 'react-redux';
import ToDos from '../components/ToDos'
import { deleteToDo, toggleCompleted, toggleRead, calculateTotal, calculateCompleted, calculateRead } from '../actions/action';

const mapStateToProps = state => {
    return {items: state.items,
            searchText : state.searchText        
    };
};

const mapDispatchToProps = (dispatch) => ({
    onDeleteClick : (e) =>dispatch(deleteToDo(e.target.id)) && dispatch(calculateTotal()),
    onCompletedClick : (e) =>dispatch(toggleCompleted(e.target.id)) && dispatch(calculateCompleted()),
    onReadClick : (e) =>dispatch(toggleRead(e.target.id)) && dispatch(calculateRead()),
})



function ToDo (props) {
    console.log(props);
    return (
        <div className="todo-tbl">
            <div className="todo-th">
                <div >Check</div>
                <div>Content</div>
                <div>Read/Unread</div>
                <div>Action</div>
            </div>    

            <div className="todo-tr">
                {props.items.map(function(item) {
                    if ((item.content.toUpperCase()).indexOf(
                        props.searchText.toUpperCase()) ===-1) {
                        return null;
                    }
                    return (
                        <ToDos key={item.id} item={item}
                        onDeleteClick={props.onDeleteClick}
                        onCompletedClick={props.onCompletedClick}
                        onReadClick={props.onReadClick}
                        onTotalChange={props.onTotalChange}
                        onCompletedChange={props.onCompletedChange}
                        onReadChange={props.onReadChange}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const ToDoList = connect (mapStateToProps,mapDispatchToProps)(ToDo)
export default ToDoList;
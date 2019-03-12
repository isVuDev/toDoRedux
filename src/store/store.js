import {createStore} from 'redux';
import toDoReducer from '../reducers/toDoReducer';
const initialState = {
    searchText: "",
    addText: "you're the first one",
    total_todo: 0,
    completed_todo: 0,
    read_todo: 0,
    items: [{
        id: 0,
        completed: false,
        read: false,
        content: "To Do 1"
    }, {
        id: 1,
        completed: true,
        read: false,
        content: "To Do 2"
    }, {
        id: 2,
        completed: false,
        read: true,
        content: "To Do 3"
    }, {
        id: 3,
        completed: true,
        read: true,
        content: "To Do 4"
    }]    
}

const store = createStore(toDoReducer,initialState);

export default store;

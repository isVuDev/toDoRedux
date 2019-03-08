import {createStore} from 'redux';
import toDoReducer from '../reducers/toDoReducer';
const initialState = {
    filterText: "",
    addText: "you're the first one",
    test: "test",
    items: [{
        id: 1,
        completed: false,
        read: false,
        content: "To Do 1"
    }, {
        id: 2,
        completed: true,
        read: false,
        content: "To Do 2"
    }, {
        id: 3,
        completed: false,
        read: true,
        content: "To Do 3"
    }, {
        id: 4,
        completed: true,
        read: true,
        content: "To Do 4"
    }]    
}

const store = createStore(toDoReducer,initialState);

export default store;

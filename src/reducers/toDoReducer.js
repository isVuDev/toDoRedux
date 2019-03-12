import {
    ADD_TODO,
    ADD_CHANGE,
    ADD_RESET,
    TEST,
    SEARCH_CHANGE,
    SEARCH_TODO,
    SEARCH_RESET,
    DELETE_TODO,
    TOGGLE_COMPLETED,
    TOGGLE_READ,
    CALCULATE_TOTAL,
    CALCULATE_READ,
    CALCULATE_COMPLETED
} from '../actions/action';

let nextID = 4 // initial

function toDoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            if (state.addText.length > 0) {
                //console.log("addText:",state.addText);
                //console.log("state.items.map((item)=> item.content.toUpperCase()).indexOf(state.addText.toUpperCase()) > -1 :"
                //,state.items.map((item)=> item.content.toUpperCase()).indexOf(state.addText.toUpperCase()) > -1);
                // console.log("1",state.items.map((item)=> item.content.toUpperCase()))
                if ((state.items.map((item) => item.content.toUpperCase()).indexOf(state.addText.toUpperCase()) > -1) === false)
                    return Object.assign({}, state, {
                        items: state.items.concat({
                            content: state.addText,
                            id: nextID++,
                            completed: false,
                            read: false
                        })
                    });
            }
            return state;

            //need asyn to reset addText after submit
        case ADD_CHANGE:
            return {
                ...state,
                addText: action.addText
            }
        case ADD_RESET:
            return {
                ...state,
                addText: ""
            }
        case TEST:
            return {
                ...state,
                test: action.test
            }
        case SEARCH_CHANGE:
            return {
                ...state,
                searchText: action.searchText
            }
        case SEARCH_RESET:
            return {
                ...state,
                searchText: ""
            }
        case SEARCH_TODO:
            return {
                ...state,
                searchText: action.searchText,
            }
        case DELETE_TODO:
            let itemsCopy = [...state.items];
            let item = itemsCopy.find((item) => {
                return item.id.toString() === action.id.toString()
            });
            let index = state.items.indexOf(item);
            itemsCopy.splice(index, 1);
            return {
                ...state,
                items: itemsCopy
            }

        case TOGGLE_COMPLETED:
            let item2 = state.items.find((item) => {
            return item.id.toString() === action.id.toString()
            });
            console.log(item);
            return {
                ...state,
                items: state.items.map(
                    toDos => (toDos.id.toString() === action.id.toString() ? Object.assign(toDos, {
                        completed: !item2.completed
                    }): toDos)
                )
            }
        case TOGGLE_READ:
            item2 = state.items.find((item) => {
            return item.id.toString() === action.id.toString()
            });
            console.log(item);
            return {
                ...state,
                items: state.items.map(
                    toDos => (toDos.id.toString() === action.id.toString() ? Object.assign(toDos, {
                        read: !item2.read
                    }): toDos)
                )
            }
        case CALCULATE_TOTAL:
            let total_todo = 0;
            for (let key in state.items) {
                total_todo += 1;
            }
            return {
                ...state,
                total_todo: total_todo,
            };
        case CALCULATE_READ:
            let read_todo = 0;
            for (let key in state.items) {
                if (state.items[key].read === true)
                read_todo +=1;
            }
            return {
                ...state,
                read_todo: read_todo,
            };

        case CALCULATE_COMPLETED:
                let completed_todo = 0;
            for (let key in state.items) {
                if (state.items[key].completed === true)
                completed_todo += 1;
            }
            return {
                ...state,
                completed_todo: completed_todo,
            }


        default:
            return state
    }
}

export default toDoReducer;
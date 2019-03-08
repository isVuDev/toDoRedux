import {
    ADD_TODO, ADD_CHANGE, ADD_RESET, TEST,SEARCH_CHANGE, SEARCH_TODO, SEARCH_RESET
} from '../actions/action';

function toDoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
        if (state.addText.length > 0 ) {
            console.log(state.addText);
            return Object.assign({}, state, {
                items: state.items.concat({
                    content: state.addText,
                    id: action.id,
                    completed: false,
                    read: false
                })});
        }

        //need asyn to reset addText after submit

        else return state;
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

        default:
            return state
    }
}

export default toDoReducer;
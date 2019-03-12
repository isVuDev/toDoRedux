export const ADD_TODO = 'ADD_TODO';
export const ADD_CHANGE = 'ADD_CHANGE';
export const ADD_RESET = 'ADD_RESET';
export const TEST = 'TEST';
export const SEARCH_CHANGE = 'SEARCH_CHANGE';
export const SEARCH_RESET = 'SEARCH_RESET';
export const SEARCH_TODO = 'SEARCH_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const TOGGLE_READ = 'TOGGLE_READ';
export const CALCULATE_TOTAL = 'CALCULATE_TOTAL';
export const CALCULATE_READ = 'CALCULATE_READ';
export const CALCULATE_COMPLETED = 'CALCULATE_COMPLETED';

export function calculateTotal() {
    return{
        type: CALCULATE_TOTAL,
    }
}

export function calculateCompleted() {
    return{
        type: CALCULATE_COMPLETED,
    }
}

export function calculateRead() {
    return{
        type: CALCULATE_READ,
    }
}

export function deleteToDo(id) {
    return {
        type: DELETE_TODO,
        id,
    }
}

export function toggleCompleted(id) {
    return {
        type: TOGGLE_COMPLETED,
        id
    }
}

export function toggleRead(id) {
    return {
        type: TOGGLE_READ,
        id,
    }
}

export function addToDo() {
    return {
        type: ADD_TODO,
    }
}
export function addToDoChange(addText) {
    return {
        type: ADD_CHANGE,
        addText,
    }
}
export function addToDoReset() {
    return {
        type: ADD_RESET,
        addText: ""
    }
}
export function test() {
    return {
        type: TEST,
        test: "NOU"
    }
}
export function searchToDoChange(searchText) {
    return {
        type: SEARCH_CHANGE,
        searchText
    }
}
export function searchToDoReset() {
    return {
        type: SEARCH_RESET,
        searchText: ""
    }
}
export function searchToDo(searchText) {
    return {
        type: SEARCH_TODO,
        searchText
    }
}
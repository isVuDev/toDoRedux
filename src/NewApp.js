import React, { Component } from 'react';
import './App.css';
import AddContainer from './containers/AddContainer'
import ToDoList from './containers/ToDoList';
import SearchContainer from './containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="Apps ">
        {/*<AddContainer/>        
        <TestContainer test = {store.getState().test} />
        <SearchContainer/>*/}
        <ToDoList/>
      </div>
    )
  }
}

export default App;

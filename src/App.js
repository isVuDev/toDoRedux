import React, { Component } from 'react';
import './App.css';
import AddContainer from './containers/AddContainer'
import ToDoList from './containers/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="Apps ">
        <AddContainer/>        
        {/*<TestContainer test = {store.getState().test} />*/}
        <ToDoList/>
      </div>
    )
  }
}

export default App;

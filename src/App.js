import React, { Component } from 'react';
import './App.css';
import AddContainer from './containers/AddContainer'
import ToDoList from './containers/ToDoList';
import SearchContainer from './containers/SearchContainer';
import Footer from './containers/Footer';
import store from './store/store';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="app-content">
                    <div className="banner">
                        <div className="TODO">
                            <div>T</div>
                            <div>O</div>
                            <div>D</div>
                            <div>O</div>
                        </div>
                    <div className="search-div">
                        <SearchContainer/>
                    </div>
                    </div>
                    <div className="add-div">
                        <div className="add-text">
                            What needs to be done ?
                        </div>
                        <AddContainer/>  
                    </div>        
            {/*<TestContainer test = {store.getState().test} />*/}
                    <div className="tbl-div" >
                        <ToDoList/>
                    </div>
                    <Footer items = {store.getState().items} />
                </div>
            </div>
    )}
}

export default App;

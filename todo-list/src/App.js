import './App.css';
import data from './components/data.json';
import React, {useState} from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';




function App() {
  const [toDoList] = useState(data);
  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList}/>
    </div>
  );
};

export default App;

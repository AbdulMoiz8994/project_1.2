import React from 'react';
import './App.css';
import Cricket from './cricketket.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Cricket dress="Green T-shirt" shoes="light green shoes" cap="Blue cap"/>
       <Cricket dress="Red T-shirt" shoes="Golden shoes" cap="pruple cap"/>
       
      </header>
    </div>
  );
}

export default App;

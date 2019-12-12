import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [members, setNewMember] = useState( [] );

  const addNewMember = member => {
      setNewMember([...members, member ])
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <h2>New Members</h2>
          
       
       
      </header>
    </div>
  );
}

export default App;

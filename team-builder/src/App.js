import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';


function App() {
  const [members, setMember] = useState( [] );

  const addNewMember = member => {
      setMember ([...members, member ])
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <h2>New Members</h2>
          <Form addNewMember={addNewMember} />
          <Member memberList={members} />
       
       
      </header>
    </div>
  );
}

export default App;

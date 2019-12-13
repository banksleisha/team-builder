import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';
import data from './data';


function App() {
  const [members, setMember] = useState(data);

  const addNewMember = member => {
      setMember ([...members, member ])
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <h2>New Members</h2>
      </header>
      <div className="body">
      <Form addNewMember={addNewMember} />
        <div className="form-box">
            <Member memberList={members} />
        </div>
      </div>
    </div>
  );
}

export default App;

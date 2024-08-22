import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Notes } from './component/notes';
import { Table } from './component/table';

function App() {
  const [notes,setNotes] = useState([
    {
      id:1,
      text:"Check the description for my Frontend Interview Prep Course"
    },
    {
      id:2,
      text:"Like this video and Subscribe to Roadsider Coder"
    }
  ])

  return (
    <div className="App">
      <Notes notes={notes} setNotes={setNotes} />
      {/* <Table/> */}
    </div>
  );
}

export default App;

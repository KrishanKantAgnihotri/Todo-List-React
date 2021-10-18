import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName]= useState("");
  const [list,setList] = useState([]);
  const [isEditing,setIsEditing] = useState(null);
  const [alert,setAlert] = useState({show:false,msg:'',type:""});
  return (
    <section className="section-center">
      <div className="main-container"></div>
    </section>
  );
}

export default App

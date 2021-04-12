import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks.js'
import React,{ useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [tasks,setTasks] = useState([]);
  
  useEffect(()=>{
  axios.get("http://192.168.0.18:8080/api/todo").then(function (response) { 
    setTasks(response.data);
    console.log(tasks);
  }).catch(error=>{
    alert(error)
  });
},[]);

  return (
    <div>
      <Tasks items={tasks}/>
    </div>
  );
}

export default App;

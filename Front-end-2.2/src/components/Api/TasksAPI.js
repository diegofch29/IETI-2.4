import React from 'react';
import axios  from axios;

const url = "";

export function getTasks(){
    axios.get("http:192.168.0.18:8080/api/todo").then(response=>{
    let tasks = response.data.response
  }).catch(error=>{
    alert(error)
  });

  return
}
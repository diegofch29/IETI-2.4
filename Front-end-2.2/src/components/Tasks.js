import React,{useState} from 'react';
import Task from './Task';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Grid,Paper,Dialog} from '@material-ui/core';
import NewTask from './NewTask.js';
import axios from 'axios';

const Tasks = (props) => {
    
    const paperStyle = {padding:20, width:720, margin:"50px auto"};
    
    const [open,setOpen] = useState(false);
    const [taskList,setTaskList] = useState(props.items);
    
    
    
    const handleAddition=(task)=>{    
            axios.post('http://192.168.0.18:8080/api/todo', task)
                .then(function (response) {
                    console.log("file uploaded!", task);
            })
            .catch(function (error) {
                console.log("failed file upload", error);
            });
        setTaskList([...taskList,task]);
        setOpen(!open);    
    };
    
    const handleClickAdditon=()=>{
        setOpen(!open); 
    };
    
    
    
    
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle} >
        <div>
            {taskList.map((item,i) => {
                return (<Task key={i}
                              responsible={item.responsible}
                              description={item.description}
                              status={item.status}
                              dueDate={item.dueDate}/>
                );
            })}
            <Fab color="primary" aria-label="add" align="right" onClick={handleClickAdditon}><AddIcon /></Fab> 
        </div>         
        </Paper>
        <Dialog open={open}>
            <NewTask addition={handleAddition}/>
        </Dialog>
        </Grid>
        
        
    );
};

export default Tasks;
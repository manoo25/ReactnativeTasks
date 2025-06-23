import {  Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "../../Styles/styles.js";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/Slices/todos.slice.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TodoForm() {

const[taskTitle, setTaskTitle] = useState('');
const[taskDescription, setTaskDescription] = useState('');
const todos = useSelector((state) => state.todos.list);
const dispatch=useDispatch();
const TaskObj={
    id: Math.random().toString(),
    title: taskTitle,
    description: taskDescription,
    completed: false
}

const handleSubmit = () => {

    if(!taskTitle || !taskDescription) {
        console.log("Please fill in both fields.");
        return;
    }
    else{
       console.log("Task Submitted:", TaskObj);
    const updated = [...todos, TaskObj];
    dispatch(addTodo(TaskObj));
     AsyncStorage.setItem("TasksList", JSON.stringify(updated));
       setTaskTitle('');
         setTaskDescription('');

        
    }
}

    return ( 
        <>
            <TextInput onChangeText={(val)=>{setTaskTitle(val)}}
            value={taskTitle}
            style={styles.input} placeholder="Task Title"/>
            <TextInput onChangeText={(val)=>{setTaskDescription(val)}}
            value={taskDescription}
            style={styles.input} placeholder="Description"/>
            <TouchableOpacity
            onPress={handleSubmit}
            style={styles.submitBtn}>
                <Text style={{color: '#fff'}}>Add Task</Text>
            </TouchableOpacity> 
        </>
    );
}

export default TodoForm;
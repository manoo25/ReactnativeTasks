import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from '../../Styles/styles.js';
import  TodoForm  from "../Components/TodoFormC.js";
import FilterBtns from '../Components/FilterBtns.js';
import TodoList from '../Components/TasksList.js';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {PATHS} from'../routes/router.js'
import Details from './Details.js';

export default function Home() {

const {navigate} = useNavigation();
  const[TasksList, setTasksList] = useState([]);

async function getTasks() {
  try {
    const data = await AsyncStorage.getItem('TasksList');
    if (data) {
      setTasksList(JSON.parse(data))
    }
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

useEffect(() => {
  getTasks();
}, []);


 function handleCheck(taskid) {
  let tasks=[...TasksList];
  let index=tasks.findIndex(x=>x.id==taskid);
  tasks[index].completed=tasks[index].completed?false:true;
setTasksList(tasks);
    AsyncStorage.setItem('TasksList', JSON.stringify(tasks))
}
 

  function addTask(task) {
    let tasks= [...TasksList,task];
    setTasksList(tasks);
    AsyncStorage.setItem('TasksList', JSON.stringify(tasks));
  }
  function RemoveTask(taskId) {
    let tasks= TasksList.filter(x=>x.id!==taskId);
    setTasksList(tasks);
    AsyncStorage.setItem('TasksList', JSON.stringify(tasks));
  }

  async function FilterTasks(state) {
   
       let tasks=await getTasks();
    switch (state) {
      case 'all':
        setTasksList(tasks);
        break;
      case 'active':
        tasks=tasks.filter(x=>x.completed==false);
        setTasksList(tasks);
        break;
      case 'completed':
        tasks=tasks.filter(x=>x.completed==true);
        setTasksList(tasks);
        break;
    
      default:
        break;
    }

   
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 50}}>ToDo App</Text>  
       <TodoForm addTasks={addTask}/>

      <View style={styles.dividerLine}>
        <Text style={styles.filterText}>Filter by:</Text>
       <FilterBtns filter={FilterTasks}/>
       <TodoList DeleteTask={RemoveTask} Check={handleCheck} TasksList={TasksList}/>
   
      </View>
    </View>
  );
}



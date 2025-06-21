import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from '../../Styles/styles.js';
import  TodoForm  from "../Components/TodoFormC.js";
import FilterBtns from '../Components/FilterBtns.js';
import TodoList from '../Components/TasksList.js';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

  const[TasksList, setTasksList] = useState([]);

  function getTasks() {
    AsyncStorage.getItem('TasksList')
      .then((data) => {
        if (data) {
          setTasksList(JSON.parse(data));
        }
      })
      .catch((error) => {
        console.log( error);
      });
  }
getTasks();
 

  function addTask(task) {
    let tasks= [...TasksList, task];
    setTasksList(tasks);
    AsyncStorage.setItem('TasksList', JSON.stringify(tasks))
      
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 50}}>ToDo App</Text>  
       <TodoForm addTasks={addTask}/>
      <View style={styles.dividerLine}>
        <Text style={styles.filterText}>Filter by:</Text>
       <FilterBtns/>
       <TodoList TasksList={TasksList}/>
      </View>
     
    </View>
  );
}



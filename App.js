import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './styles.js';

export default function App() {

  const TasksList=[
    {id: '1', title: 'Buy Groceries', description: 'Milk, Bread, Eggs'},
    {id: '2', title: 'Walk the Dog', description: 'Evening walk at the park'},
    {id: '3', title: 'Complete Homework', description: 'Math and Science assignments'},
    {id: '4', title: 'Call Mom', description: 'Check in and see how she is doing'},

  ];

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 50}}>ToDo App</Text>
      <TextInput style={styles.input} placeholder="Task Title"/>
      <TextInput style={styles.input} placeholder="Description"/>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={{color: '#fff'}}>Add Task</Text>
      </TouchableOpacity> 
      <View style={styles.dividerLine}>
        <Text style={styles.filterText}>Filter by:</Text>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Completed</Text>
          </TouchableOpacity>

          
        </View>
         <View style={styles.filterContainer}>
        <FlatList
        
          data={TasksList}
          renderItem={({ item }) => (
            <View style={{backgroundColor: '#fff',padding: 10, borderRadius: 10, marginTop:10}}>
              <Text>Task Name : {item.title}</Text>
              <Text>Description : {item.description}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      </View>
     
    </View>
  );
}



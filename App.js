import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './styles.js';

export default function App() {


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
      </View>
    </View>
    

  );
}



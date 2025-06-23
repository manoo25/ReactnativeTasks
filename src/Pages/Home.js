
import { ScrollView, Text, View } from 'react-native';
import {styles} from '../../Styles/styles.js';
import  TodoForm  from "../Components/TodoFormC.js";
import TodoList from '../Components/TasksList.js';

export default function Home() {

  return (
  <ScrollView>
      <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 50}}>ToDo App</Text>  
       <TodoForm />
      <View style={styles.dividerLine}>
        <Text style={styles.filterText}>Filter by:</Text>
       <TodoList />
      </View>
    </View>
  </ScrollView>
  );
}



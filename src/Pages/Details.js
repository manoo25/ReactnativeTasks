import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleComplete } from "../Redux/Slices/todos.slice";
import { useState } from "react";
import { PATHS } from "../routes/router";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Details() {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.list);
  const [Task, setTask] = useState(params.item);

  function handleCheck() {
    const updatedTask = { ...Task, completed: !Task.completed };
    setTask(updatedTask);

    // Update Redux
    dispatch(toggleComplete(Task.id));

    // Update AsyncStorage
    const updatedTodos = todos.map(todo =>
      todo.id === Task.id ? { ...todo, completed: !todo.completed } : todo
    );
    AsyncStorage.setItem("TasksList", JSON.stringify(updatedTodos));
  }

  function handleDelete() {
    dispatch(removeTodo(Task.id));

    const updatedTodos = todos.filter(todo => todo.id !== Task.id);
    AsyncStorage.setItem("TasksList", JSON.stringify(updatedTodos));

    navigate(PATHS.Home);
  }

  return (
    <View style={{ width: '100%', height: '100%', padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ marginTop: 50, fontSize: 35, fontWeight: '600', textAlign: 'center' }}>{Task.title}</Text>

      <View style={{
        backgroundColor: 'lightblue',
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
        <Text style={{ fontSize: 22, fontWeight: '600', color: 'green' }}>Description:</Text>
        <Text style={{ marginTop: 10, fontSize: 20 }}>{Task.description}</Text>
      </View>

      <View style={{
        backgroundColor: 'lightblue',
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
        <Text style={{ fontSize: 22, fontWeight: '600', color: 'green' }}>State:</Text>
        <Text style={{ marginTop: 10, fontSize: 20 }}>{Task.completed ? 'Completed' : 'Not Completed'}</Text>
      </View>

      <TouchableOpacity
        onPress={handleCheck}
        style={Task.completed ? styles.NotCompletedBtn : styles.CompletedBtn}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
          {Task.completed ? 'Mark as Not Completed' : 'Mark as Completed'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDelete}
        style={styles.DeletedBtn}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>Delete Task</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Details;

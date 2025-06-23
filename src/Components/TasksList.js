import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "../../Styles/styles.js";
import { FontAwesome5 } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/router.js";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../Redux/Slices/todos.slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import FilterBtns from "./FilterBtns";

function TodoList() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state.todos.list);
  const [filter, setFilter] = useState('all');

  const filteredTasks = allTasks.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; 
  });

  const handleDelete = (id) => {
    const updated = allTasks.filter(todo => todo.id !== id);
    dispatch(removeTodo(id));
    AsyncStorage.setItem("TasksList", JSON.stringify(updated));
  };

  const handleCheck = (id) => {
    const updated = allTasks.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(toggleComplete(id));
    AsyncStorage.setItem("TasksList", JSON.stringify(updated));
  };

  return (
    <>
    <FilterBtns onChange={setFilter} />
     <View style={styles.filterContainer}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={filteredTasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigate(PATHS.DETAILS, { item })}>
            <View style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 10,
              marginTop: 10
            }}>
              <View>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.title}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <FontAwesome5 onPress={() => handleDelete(item.id)} name="trash" size={20} color="red" />
                {item.completed ? (
                  <AntDesign onPress={() => handleCheck(item.id)} name="checkcircle" size={20} color="green" />
                ) : (
                  <AntDesign onPress={() => handleCheck(item.id)} name="checkcircleo" size={20} color="gray" />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    </>
   
  );
}

export default TodoList;

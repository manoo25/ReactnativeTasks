
import { View,Text,FlatList } from "react-native";
import { styles } from "../../Styles/styles.js";
import { FontAwesome5 } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

function TodoList({TasksList}) {



    return ( 
      
  <View style={styles.filterContainer}>
        <FlatList
       
          data={TasksList}
          renderItem={({ item }) => (
            <View style={{ 
              flex: 1,
              justifyContent:'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',padding: 10, borderRadius: 10, marginTop:10}}>
              <View>
                <Text>Task Name : {item.title}</Text>
              <Text>Description : {item.description}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center',gap:'10'}}>
                 <FontAwesome5 name="trash" size={20} color="red" />
                 {TasksList.completed ? (
                   <AntDesign  name="checkcircle" size={20} color="green" />
                 ) : (
                   <AntDesign  name="checkcircleo" size={20} color="gray" />
                 )}
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
     );
}

export default TodoList;













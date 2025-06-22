
import { View,Text,FlatList, TouchableOpacity } from "react-native";
import { styles } from "../../Styles/styles.js";
import { FontAwesome5 } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/router.js";

function TodoList({TasksList,Check,DeleteTask}) {

const {navigate} = useNavigation();

    return ( 
      
  <View style={styles.filterContainer}>
        <FlatList
       
          data={TasksList}
          renderItem={({ item }) => (
            <TouchableOpacity  onPress={() => navigate(PATHS.DETAILS,  {item:item,check:Check,delete:DeleteTask})}>
<View style={{ 
              flex: 1,
              justifyContent:'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',padding: 10, borderRadius: 10, marginTop:10}}
             
              
              >
              <View>
                <Text style={{fontSize:20,fontWeight:600}}>{item.title}</Text>
          
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center',gap:'10'}}>
                 <FontAwesome5 onPress={()=>DeleteTask(item.id)} name="trash" size={20} color="red" />
                 {item.completed ? (
                   <AntDesign onPress={()=>Check(item.id)}  name="checkcircle" size={20} color="green" />
                 ) : (
                   <AntDesign onPress={()=>Check(item.id)}  name="checkcircleo" size={20} color="gray" />
                 )}
              </View>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
     );
}

export default TodoList;













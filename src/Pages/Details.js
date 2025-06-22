import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { PATHS } from "../routes/router";

function Details() {
const {navigate} = useNavigation();
    const {params}= useRoute(); 
    const item=params.item;
const [Task,setTask]=useState(item);
function handleCheck() {
   
    const updatedTask = Task.completed ? { ...Task, completed: false } : { ...Task, completed: true };
    setTask(updatedTask);
     params.check(item.id);
}
const handleDelete = () => {
    params.delete(item.id);
   navigate(PATHS.Home); 
};
    return ( 
       <View style={{width:'100%',height:'100%',padding:20,backgroundColor:'#fff'}}>
         <Text style={{marginTop:50,fontSize:35,fontWeight:600,textAlign:'center'}}>{Task.title}</Text>
        <View style={{ 
              backgroundColor: 'lightblue', borderRadius: 10, marginTop:20,paddingHorizontal:10,paddingVertical:20,
            }
              }>
             <Text style={{fontSize:22, fontWeight:600,textAlign:'left',color:'green'}}>Description:</Text>
         <Text style={{marginTop:10,fontSize:20,textAlign:'left'}}>{Task.description}</Text>
        </View>
        <View style={{ 
              backgroundColor: 'lightblue', borderRadius: 10, marginTop:20,paddingHorizontal:10,paddingVertical:20,
            }
              }>
             <Text style={{fontSize:22, fontWeight:600,textAlign:'left',color:'green'}}>State:</Text>
         <Text style={{marginTop:10,fontSize:20,textAlign:'left'}}>{Task.completed?'Completed':'NotCompleted'}</Text>
        </View>
          <TouchableOpacity
                   onPress={()=>handleCheck()}
                    style={ Task.completed?styles.NotCompletedBtn:styles.CompletedBtn}>
                        <Text style={{color: '#fff',fontSize:18,fontWeight:600}}>{Task.completed?'NotCompleted':'Completed'}</Text>
                    </TouchableOpacity> 
          <TouchableOpacity
                   onPress={()=>handleDelete()}
                    style={ styles.DeletedBtn}>
                        <Text style={{color: '#fff',fontSize:18,fontWeight:600}}>Deleted Task</Text>
                    </TouchableOpacity> 
       </View>
     );
}

export default Details;
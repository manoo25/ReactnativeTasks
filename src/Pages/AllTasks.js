
import { styles } from "../../Styles/styles.js";
import { ScrollView, Text, View } from "react-native";
import TodoList from '../Components/TasksList.js';


function AllTodos() {
   
    return ( 

<ScrollView>
<View style={styles.container}>
    <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 50,marginBottom:10}}>All Todos</Text>  
        <View style={styles.dividerLine}>
    <TodoList/>
</View>
</View>
</ScrollView>
       
    
     );
}

export default AllTodos;
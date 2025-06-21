import { View,TouchableOpacity,Text } from "react-native";
import { styles } from "../../Styles/styles.js";

function FilterBtns() {
    return ( 
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
     );
}

export default FilterBtns;
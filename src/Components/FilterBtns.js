import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "../../Styles/styles.js";
import { useState } from "react";

function FilterBtns({ onChange }) {
  const [activeFilter, setActiveFilter] = useState('all');

  function handleFilter(state) {
    setActiveFilter(state);
    onChange(state); 
   }

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={() => handleFilter('all')} style={activeFilter === 'all' ? styles.activeFilterBtn : styles.filterBtn}>
        <Text style={activeFilter === 'all' ? styles.activeFilterText : styles.filterText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFilter('active')} style={activeFilter === 'active' ? styles.activeFilterBtn : styles.filterBtn}>
        <Text style={activeFilter === 'active' ? styles.activeFilterText : styles.filterText}>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFilter('completed')} style={activeFilter === 'completed' ? styles.activeFilterBtn : styles.filterBtn}>
        <Text style={activeFilter === 'completed' ? styles.activeFilterText : styles.filterText}>Completed</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FilterBtns;

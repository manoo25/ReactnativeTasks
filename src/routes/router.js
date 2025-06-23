import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import AllTodos from '../Pages/AllTasks';

export const PATHS = {
  Home: 'Home Page',
  DETAILS: 'Details Page',
  AllTodos: 'All Tasks',
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false, 
        }}
    >
      <Stack.Screen name={PATHS.Home} component={Home} />
      <Stack.Screen
        name={PATHS.DETAILS}
        component={Details}
        options={{
          headerShown: true,
          headerTitle: '',
          headerBackTitleVisible: true,
          headerBackTitle: 'Back',
          headerTintColor: 'green',
        }}
      />
      <Stack.Screen name={PATHS.AllTodos} component={AllTodos} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'green',
          
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === PATHS.Home) {
              iconName = focused ? 'home' : 'home-outline';
            } 
            else if (route.name === PATHS.AllTodos) {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
      >
        <Tab.Screen name={PATHS.Home} component={StackScreen} />
        <Tab.Screen name={PATHS.AllTodos} component={StackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default Router;

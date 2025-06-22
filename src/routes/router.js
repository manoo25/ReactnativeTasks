import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Home from '../Pages/Home';
import Details from '../Pages/Details';

export const PATHS={
    Home:'Home Page',
    DETAILS:'Details Page'
}

function Router() {
    const MyStack = createNativeStackNavigator();
    return (  
      <NavigationContainer>
<MyStack.Navigator screenOptions={{
 
headerShown: false,
    }}>
    <MyStack.Screen name={PATHS.Home} component={Home}></MyStack.Screen>
    <MyStack.Screen name={PATHS.DETAILS} component={Details}></MyStack.Screen>
</MyStack.Navigator>
      </NavigationContainer>
    );
}

export default Router;
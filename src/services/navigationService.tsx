import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login';
import DoorRepair from '../screens/DoorRepair/DoorRepair';
import EntryScreen from '../screens/EntryScreen/EntryScreen';

const AppTheme: any = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme,
      background: "white",
    }
  }

const Stack: any = createNativeStackNavigator();

const AppNavigator = () => {

    return (
      <NavigationContainer theme={AppTheme}> 
      <Stack.Navigator initialRouteName='EntryScreen' >
       <Stack.Screen options={{headerShown: false}}  name='EntryScreen' component={EntryScreen}/>
      </Stack.Navigator> 
     </NavigationContainer>
    );
  };
  
  export default AppNavigator;
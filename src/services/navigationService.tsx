import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login';
import DoorRepair from '../screens/DoorRepair/DoorRepair';
import { useSelector } from 'react-redux';

const AppTheme: any = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme,
      background: "white",
    }
  }

const Stack: any = createNativeStackNavigator();

const AppNavigator = () => {
  const isLogin = useSelector((state: any) => state.auth.isLogin);

    return (
      <NavigationContainer theme={AppTheme}> 
      <Stack.Navigator initialRouteName='Login' >
        {/* {
          isLogin ?  <Stack.Screen options={{headerShown: false}}  name='Login' component={Login}/>  : 
          <Stack.Screen options={{headerShown: false}}  name='DoorRepair' component={DoorRepair}/>
        } */}
       <Stack.Screen options={{headerShown: false}}  name='Login' component={Login}/>
       <Stack.Screen options={{headerShown: false}}  name='DoorRepair' component={DoorRepair}/>
      </Stack.Navigator> 
     </NavigationContainer>
    );
  };
  
  export default AppNavigator;
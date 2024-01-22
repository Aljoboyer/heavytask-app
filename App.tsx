import React from 'react';
import { withExpoSnack } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {NativeWindView, NativeWindText} from "./src/components/NativeWIndComponents"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/Auth/Login';
import { Text } from 'react-native';
import DoorRepair from './src/screens/DoorRepair/DoorRepair';


const Stack: any = createNativeStackNavigator();


const AppTheme: any = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    background: "white",
  }
}

const App = () => {
  const [fontsLoaded] = useFonts({
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf')
  });
  if(!fontsLoaded){
    return  (
      <Text>Loading...</Text>
    )
  }
  return (
    <NavigationContainer theme={AppTheme}> 
    <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen options={{headerShown: false}}  name='Login' component={Login}/>
      <Stack.Screen options={{headerShown: false}}  name='DoorRepair' component={DoorRepair}/>
    </Stack.Navigator> 
  </NavigationContainer>
  );
}

export default withExpoSnack(App)
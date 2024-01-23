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
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/services/navigationService';

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
  
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AppNavigator/>
      </PersistGate>
    </Provider>
    
  );
}

export default withExpoSnack(App)
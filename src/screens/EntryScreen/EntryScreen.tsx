import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux';
import DoorRepair from '../DoorRepair/DoorRepair';
import Login from '../Auth/Login';

export default function EntryScreen() {
  const isLogin = useSelector((state: any) => state.auth.isLogin);

  return (
    <SafeAreaView style={{flex: 1}}>
        {
            isLogin ? <DoorRepair/> : <Login/>
        }
    </SafeAreaView>
  )
}
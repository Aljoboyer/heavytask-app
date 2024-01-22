import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors';
import { Commonstyles } from '../../Styles/CommonStyles';
import UTSText from '../UTSText/UTSText';
import { Entypo, AntDesign } from '@expo/vector-icons';

export default function ScreenBackHeader({headerTitle, orderText, cancelPress, stepCount}: any) {
  return (
    <View style={HeaderStyle.HeaderContainer}>
       {
        stepCount < 4 ? <Pressable onPress={cancelPress} style={[Commonstyles.FlexStart, HeaderStyle.titleView]}>
         <Entypo name="chevron-left" size={24} color="#112d80" />
         <UTSText preset="h2" title={headerTitle} customStyle={{color: COLORS.darkBlue}}/>
         </Pressable> : <View style={{marginTop: 10, marginLeft: 10}}><AntDesign name="checkcircleo" size={34} color={COLORS.blue} /></View>
       }
      {orderText && <UTSText title={orderText} preset="p" customStyle={{color: COLORS.gray_500, marginLeft: 5, marginTop: 5}}/>}
    </View>
  )
}

const HeaderStyle = StyleSheet.create({
  HeaderContainer: {
      backgroundColor: COLORS.CommonBg,
      paddingVertical: 20,
      paddingHorizontal: 15
  },
  titleView:{
    
  }
});
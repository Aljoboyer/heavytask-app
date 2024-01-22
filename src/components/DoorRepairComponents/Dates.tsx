import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'

export default function Dates({continuePress, cancelPress}: any) {
  return (
    <View style={{flex: 1}}>
        <View style={DatesStyle.datesConainer}>
            <UTSText title="Choose at least 2 available dates" preset="h3" />
        </View>
        <BottomCoupleButton nextPress={continuePress} cancelPress={cancelPress} />
    </View>
  )
}

const DatesStyle = StyleSheet.create({
    datesConainer: {
        padding: 20
    }
  });
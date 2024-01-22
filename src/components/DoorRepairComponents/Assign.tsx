import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'

export default function Assign({continuePress, cancelPress}: any) {
  return (
    <View style={{flex: 1}}>
        <View style={AssignStyle.AssignConainer}>
            <UTSText title="Assign Team Member" preset="h3" />
        </View>
        <BottomCoupleButton nextPress={continuePress} cancelPress={cancelPress} />
    </View>
  )
}

const AssignStyle = StyleSheet.create({
    AssignConainer: {
        padding: 20
    }
  });
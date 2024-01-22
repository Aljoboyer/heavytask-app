import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'

export default function Times({continuePress, cancelPress}: any) {
  return (
    <View style={{flex: 1}}>
        <View style={TimesStyle.TimesConainer}>
            <UTSText title="Choose time" preset="h3" />
        </View>
        <BottomCoupleButton nextPress={continuePress} cancelPress={cancelPress} />
    </View>
  )
}

const TimesStyle = StyleSheet.create({
    TimesConainer: {
        padding: 20
    }
  });
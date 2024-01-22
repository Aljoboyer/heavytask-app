import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'

export default function Review({continuePress, cancelPress}: any) {
  return (
    <View style={{flex: 1}}>
        <View style={ReviewStyle.ReviewConainer}>
            <UTSText title="Does this look correct?" preset="h3" />
        </View>
        <BottomCoupleButton nextPress={continuePress} cancelPress={cancelPress} />
    </View>
  )
}

const ReviewStyle = StyleSheet.create({
    ReviewConainer: {
        padding: 20
    }
  });
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import UTSText from '../UTSText/UTSText'
import { COLORS } from '../../theme/colors';
import { Commonstyles } from '../../Styles/CommonStyles';

export default function UTSButton({customTextStyle, customBtnStyle, title, onPress}: any) {
  return (
    <TouchableOpacity onPress={onPress} style={[ButtonStyle.buttons, customBtnStyle, Commonstyles.FlexCenter]}>
      <UTSText title={title} preset="Title" customStyle={customTextStyle}/>
    </TouchableOpacity>
  )
}

const ButtonStyle = StyleSheet.create({
    buttons: {
        height: 52,
        backgroundColor: COLORS.darkBlue,
        borderRadius: 10,
        width: 330
    }
  });
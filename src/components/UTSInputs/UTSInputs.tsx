import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function UTSInputs({placeholder, numberOfLines, onChangeText, customStyle, keyboardType, maxLength,onFocus, onBlur} : any) {
  return (
   <TextInput
    placeholder={placeholder}
    numberOfLines={numberOfLines}
    onChangeText={(text) => onChangeText(text)}
    style={[InputStyle.inputs, customStyle]}
    keyboardType={keyboardType}
    maxLength={maxLength}
    onFocus={onFocus}
    onBlur={onBlur}
   />
  )
}

const InputStyle = StyleSheet.create({
  inputs: {
      borderWidth: 1,
      borderColor: '#e5e7eb',
      backgroundColor: '#fafbfc',
      borderRadius: 10,
      paddingHorizontal: 8
  }
});
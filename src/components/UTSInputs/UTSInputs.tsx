import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function UTSInputs({placeholder, numberOfLines, onChangeText, customStyle} : any) {
  return (
   <TextInput
    placeholder={placeholder}
    numberOfLines={numberOfLines}
    onChangeText={onChangeText}
    style={[InputStyle.inputs, customStyle]}
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
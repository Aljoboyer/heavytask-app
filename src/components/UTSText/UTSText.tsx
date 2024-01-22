import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './TextPreset';
import {  UTSTextPropsInterface } from '../../TypeInterfaces/PropsInterfaces';

export default function UTSText({title, preset='default', customStyle, numberOfLines = 1}: UTSTextPropsInterface | any ) {

  const TextStyle: any = StyleSheet.compose(presets[preset], customStyle)

  return (
      <Text numberOfLines={numberOfLines} style={TextStyle}>{title}</Text>
  );
}
import { View, Text } from 'react-native'
import React from 'react'
import { Feather , FontAwesome} from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';

export default function CheckBox({checked = false}: any) {
  return (
    <>
      {
        checked ? <FontAwesome name="check-square" size={18} color={COLORS.blue} /> : <Feather name="square" size={18} color="black" /> 
      }
    </>
  )
}
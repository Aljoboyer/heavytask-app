import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'
import SelectDropdown from 'react-native-select-dropdown'
import { COLORS } from '../../theme/colors'
import { AntDesign } from '@expo/vector-icons';

export default function Assign({continuePress, cancelPress}: any) {
  const countries = ["Giannis Antetokounmpo (Me)", "Jhon Doe", "Jenas Arms", "Jhonny Depp"]

  return (
    <View style={{flex: 1}}>
        <View style={AssignStyle.AssignConainer}>
            <UTSText title="Assign Team Member" preset="h3" />

            <UTSText title="Team Member 1" preset="title" customStyle={{color: COLORS.gray_900, marginTop: 30}}/>
            <SelectDropdown
              data={countries}
              buttonStyle={{borderWidth: 1, 
                borderRadius: 10,
                 borderColor: COLORS.gray_200,
                  backgroundColor: 'white', 
                  width: '100%',
                  marginTop: 10,
                  alignSelf: 'center',
                }}
                buttonTextStyle={{textAlign: 'left'}}
              dropdownStyle={{borderRadius: 10}}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              renderDropdownIcon={() => (
                <AntDesign name="down" size={14} color="black" />
              )}
              dropdownIconPosition="right"
            />
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
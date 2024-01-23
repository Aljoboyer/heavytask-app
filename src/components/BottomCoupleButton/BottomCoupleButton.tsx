import { View, Text } from 'react-native'
import React from 'react'
import UTSButton from '../UTSButton/UTSButton'
import { COLORS } from '../../theme/colors'
import { Commonstyles } from '../../Styles/CommonStyles'

export default function BottomCoupleButton({nextTitle = "Continue", cancelTitle = "Cancel", nextPress, cancelPress, nextActive, cancelBtnShow = true}: any) {
  return (
    <View style={[Commonstyles.FlexColumnCenter, {position: 'absolute',
    bottom:0,
    width: '100%', backgroundColor: 'white', paddingVertical: 10}]}>
        <UTSButton title={nextTitle} onPress={nextPress} customTextStyle={{color: 'white'}} customBtnStyle={{backgroundColor: nextActive ? COLORS.darkBlue : COLORS.gray_200}}/>

        {
          cancelBtnShow && <UTSButton title={cancelTitle} onPress={cancelPress} customTextStyle={{color: COLORS.darkBlue}} customBtnStyle={{backgroundColor: 'white', marginTop: 10}}/>
        }
    </View>
  )
}
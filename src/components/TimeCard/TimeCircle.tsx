import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StepperCircleStyle } from '../../Styles/StepperStyle'
import { Commonstyles } from '../../Styles/CommonStyles'
import { COLORS } from '../../theme/colors'
import UTSText from '../UTSText/UTSText'

export default function TimeCircle({active, circleTitle, lastItem}: any) {
  return (
    <View style={Commonstyles.FlexColumnStart}>
       <View style={[Commonstyles.FlexCenter]}>
          <View style={[TimeCircleStyle.outterCircle, Commonstyles.FlexCenter, {backgroundColor: active ? 'white' : COLORS.CommonBg}]}>
                {
                    active && <View style={[TimeCircleStyle.innerCircle, {backgroundColor: active ? COLORS.darkBlue : 'white'}]}>

                    </View>
                }
            </View> 
       </View>
    </View>
  )
}
const TimeCircleStyle = StyleSheet.create({
    outterCircle: {
        height: 18,
        width: 18,
        borderRadius: 100
    },
    innerCircle: {
        height: 10,
        width: 10,
        borderRadius: 100
    },
    EmptyLine:{
        height: 2,
        backgroundColor: COLORS.stepper_off_outter,
        width: 60,
        marginHorizontal: 7
    }
  });

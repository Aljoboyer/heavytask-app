import { View, Text } from 'react-native'
import React from 'react'
import { StepperCircleStyle } from '../../Styles/StepperStyle'
import { Commonstyles } from '../../Styles/CommonStyles'
import { COLORS } from '../../theme/colors'
import UTSText from '../UTSText/UTSText'

export default function StepperCircle({active, circleTitle, lastItem}: any) {
  return (
    <View style={Commonstyles.FlexColumnStart}>
       <View style={[Commonstyles.FlexCenter]}>
          <View style={[StepperCircleStyle.outterCircle, Commonstyles.FlexCenter, {backgroundColor: active ? COLORS.stepper_active_outter : COLORS.stepper_off_outter}]}>
                <View style={[StepperCircleStyle.innerCircle, {backgroundColor: active ? COLORS.stepper_active_inner : COLORS.stepper_off_inner}]}>

                </View>
            </View> 
          {  lastItem !== circleTitle && <View style={StepperCircleStyle.EmptyLine}></View>}
       </View>
        <UTSText title={circleTitle} preset="p2" customStyle={{color: active ? COLORS.lightBlue : COLORS.gray_900, marginTop: 4}}/>
    </View>
  )
}


import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StepperCircle from './StepperCircle';
import { COLORS } from '../../theme/colors';
import { Commonstyles } from '../../Styles/CommonStyles';

export default function Stepper({stepCount = 1, stepData, lastItem} : any) {
  return (
    <View style={[StepperStyle.stepperMainConainer, Commonstyles.FlexCenter]}>
        {
            stepData?.map((item: string, index: number) => (
                <View key={item} style={[Commonstyles.FlexBewteen]}>
                    <StepperCircle lastItem={lastItem} active={stepCount >= index ? true : false} circleTitle={item} />
                </View>
            ))
        }
       
    </View>
  )
}

const StepperStyle = StyleSheet.create({
    stepperMainConainer:{

    },
 
  });
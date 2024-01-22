import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StepperCircle from './StepperCircle';
import { COLORS } from '../../theme/colors';
import { Commonstyles } from '../../Styles/CommonStyles';
import UTSText from '../UTSText/UTSText';

export default function Stepper({stepCount = 1, stepData, lastItem} : any) {
  return (
    <View style={[StepperStyle.stepperMainConainer, Commonstyles.FlexCenter, ]}>
        {
            stepData?.map((item: string, index: number) => (
                <View key={item} style={[Commonstyles.FlexColumnStart]}>
                    <View style={{marginLeft: 10}}>
                      <StepperCircle lastItem={lastItem} active={stepCount >= index ? true : false} circleTitle={item} />
                    </View>
                  <UTSText title={item} preset="p2" customStyle={{color: stepCount >= index ? COLORS.lightBlue : COLORS.gray_900, marginTop: 4, textAlign: "center"}}/>
                    
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
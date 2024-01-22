import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../theme/colors'
import ScreenBackHeader from '../../components/ScreenBackHeader/DoorRepairHeader'
import Stepper from '../../components/Stepper/Stepper'
import Dates from '../../components/DoorRepairComponents/Dates'
import Times from '../../components/DoorRepairComponents/Times'
import Assign from '../../components/DoorRepairComponents/Assign'
import Review from '../../components/DoorRepairComponents/Review'
import CompleteStep from '../../components/DoorRepairComponents/CompleteStep'

export default function DoorRepair() {
  const [headerTitle, setHeaderTitle] = useState('Masonite Door Repair');
  const [steppName, setStepName] = useState('');
  const [stepCount, setStepCount] = useState(0)
  const stepperData = ['Dates', "Times", "Assign", "Review"]

  const continuePress = (step: string) => {
    setStepName(step)
    if(stepCount < 4 ){
      setStepCount((prev) => prev + 1)
    }
  }

  const cancelPress = () => {
    if(stepCount > 0){
      setStepCount((prev) => prev - 1)
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.CommonBg}}>
        <ScreenBackHeader stepCount={stepCount} cancelPress={cancelPress} orderText={stepCount < 4 && 'Order # 12345'} headerTitle={stepCount == 2 ? 'Pella Window Install' : headerTitle} />

        {
          stepCount <= 3 && <Stepper stepData={stepperData} stepCount={stepCount} lastItem={stepperData[stepperData.length - 1]} />
      } 

        {stepCount == 0 &&  <Dates continuePress={continuePress} cancelPress={cancelPress}/>}
        {stepCount == 1 &&  <Times continuePress={continuePress} cancelPress={cancelPress}/>}
        {stepCount == 2 &&  <Assign continuePress={continuePress} cancelPress={cancelPress}/>}
        {stepCount == 3 &&  <Review continuePress={continuePress} cancelPress={cancelPress}/>}
        {stepCount == 4 &&  <CompleteStep continuePress={continuePress} cancelPress={cancelPress}/>}
      
    </SafeAreaView>
  )
}
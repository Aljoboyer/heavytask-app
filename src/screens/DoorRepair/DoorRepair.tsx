import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../theme/colors'
import ScreenBackHeader from '../../components/ScreenBackHeader/DoorRepairHeader'
import Stepper from '../../components/Stepper/Stepper'

export default function DoorRepair() {
  const [headerTitle, setHeaderTitle] = useState('Masonite Door Repair');
  const stepperData = ['Dates', "Times", "Assign", "Review"]
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.CommonBg}}>
        <ScreenBackHeader orderText="Order # 12345" headerTitle={headerTitle} />
        <Stepper stepData={stepperData} stepCount={0} lastItem={stepperData[stepperData.length - 1]} />
    </SafeAreaView>
  )
}
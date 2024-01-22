import { View, Text } from 'react-native'
import React from 'react'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'
import { COLORS } from '../../theme/colors'
import UTSText from '../UTSText/UTSText'

export default function CompleteStep({continuePress, cancelPress}: any) {
  const finishHandler = () => {

  }

  return (
    <View style={{flex: 1}}>
         
        <View style={{padding: 20}}>
            <UTSText preset="h2" title="Appointment Invitation Sent!" customStyle={{color: COLORS.darkBlue}}/>

            <UTSText numberOfLines={5} title="We are working to finalize this schedule with the homeowner now. We will confirm when this appointment has been finalized." preset="small" customStyle={{color: COLORS.darkBlue, marginTop: 20}}  />


        </View>

        <BottomCoupleButton cancelBtnShow={false} nextActive={true} nextTitle="Finish" nextPress={finishHandler} />
    </View>
  )
}
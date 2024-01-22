import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'
import TimeCard from '../TimeCard/TimeCard';
import { COLORS } from '../../theme/colors';

export default function Times({continuePress, cancelPress}: any) {
  const [selectedTime, setSelectedTime] = useState('');
  const timeCardData = [{title: 'November 10th, 2023'},{title: 'November 16th, 2023'}]
  return (
    <View style={{flex: 1}}>
        <View style={TimesStyle.TimesConainer}>
            <UTSText title="Choose time" preset="h3" customStyle={{color: COLORS.darkBlue}} />
            {
              timeCardData?.map((item) => (
                <TimeCard timeData={item} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
              ))
            }
        </View>
        <BottomCoupleButton nextActive={true} nextPress={continuePress} cancelPress={cancelPress} />
    </View>
  )
}

const TimesStyle = StyleSheet.create({
    TimesConainer: {
        padding: 20
    }
  });
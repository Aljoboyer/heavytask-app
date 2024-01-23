import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'
import TimeCard from '../TimeCard/TimeCard';
import { COLORS } from '../../theme/colors';
import { Commonstyles } from '../../Styles/CommonStyles';
import { AntDesign } from '@expo/vector-icons';

export default function Times({continuePress, cancelPress}: any) {
  const [selectedTime, setSelectedTime] = useState({});
  const timeCardData = [{title: 'November 10th, 2023'},{title: 'November 16th, 2023'}]
  return (
    <View style={{flex: 1}}>
        <View style={TimesStyle.TimesConainer}>
            <UTSText title="Choose time" preset="h3" customStyle={{color: COLORS.darkBlue}} />
            {
              timeCardData?.map((item) => (
                <View style={TimesStyle.timecardContainer}>
                <TimeCard timeData={item} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                  {
                    item?.title == 'November 10th, 2023' && <Pressable style={[Commonstyles.FlexBewteen, {marginTop: 20, marginBottom: 5}]}>
                    <UTSText title="Scheduled Assignments on 11/11/23" preset="p" customStyle={{color: COLORS.darkBlue}} />
                    <AntDesign name="down" size={18} color={COLORS.darkBlue} />
                </Pressable>
                  }
                </View>
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
    },
    timecardContainer: {  
      borderWidth: 1,
      borderColor: COLORS.gray_200,
      borderRadius: 10,
      padding: 10,
      marginTop: 15,
    
  },
  });
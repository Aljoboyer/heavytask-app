import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors';
import UTSText from '../UTSText/UTSText';
import { Commonstyles } from '../../Styles/CommonStyles';
import TimeCircle from './TimeCircle';

export default function TimeCard({timeData, selectedTime, setSelectedTime}: any) {
  const timePeriod = ['Morning', 'Afternoon']
  return (
    <View>
        <UTSText title={timeData?.title} customStyle={{color: COLORS.darkBlue}} preset="title1" />
        <View style={[Commonstyles.FlexBewteen, {marginTop: 20}]}>
            {
              timePeriod?.map((item, index) => (
                <Pressable key={index} onPress={() => setSelectedTime({title: timeData?.title, shift: item})} style={[selectedTime == timeData?.title ? TimeCardStyle.cardSelected : TimeCardStyle.cardNotSelected, Commonstyles.FlexStart, TimeCardStyle.cardCommon]}>
                  <TimeCircle active={selectedTime?.title == timeData?.title && selectedTime?.shift == item ? true : false} />
                  <UTSText title={item} preset="title" customStyle={{color: COLORS.darkBlue}} />
                </Pressable>
              ))
            }
        </View>
    </View>
  )
}

const TimeCardStyle = StyleSheet.create({
    timecardContainer: {  
        borderWidth: 1,
        borderColor: COLORS.gray_200,
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
      
    },
    cardSelected:{
      borderWidth: 1,
      borderColor: COLORS.dark_sky,
      borderRadius: 10,
      backgroundColor: COLORS.light_sky,
      padding: 10
    },
    cardNotSelected:{
      borderWidth: 1,
      borderColor: COLORS.gray_100,
      borderRadius: 10,
      backgroundColor: 'white',
      padding: 10
    },
    cardCommon:{
      width: 160,
      height: 50
    }
  });
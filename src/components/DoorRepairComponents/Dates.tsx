import { View, Text, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'
import { COLORS } from '../../theme/colors'
import ScheduleCard from '../ScheduleCard/ScheduleCard'
import { AntDesign } from '@expo/vector-icons';
import { Commonstyles } from '../../Styles/CommonStyles'
import UTSCalendar from '../UTSCalendar/UTSCalendar'
import UTSButton from '../UTSButton/UTSButton'

export default function Dates({continuePress, cancelPress}: any) {
  const [showScheduleData, setShowScheduleData] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateArr, setSelectedDateArr] = useState<any>([])

  return (
    <View style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
        <View style={DatesStyle.datesConainer}>
            <UTSText title="Choose at least 2 available dates" preset="h3" customStyle={{color: COLORS.darkBlue}} />

            
            <UTSCalendar
               onDayPress={(date: any) => {
                setSelectedDate(date?.dateString);
                setSelectedDateArr((prev: any) => [...prev, date?.dateString])
              }}
              markedDates={
                selectedDateArr ? selectedDateArr : null
              }
            />
            <View style={[Commonstyles.FlexBewteen, {marginTop: 20}]}>
                <UTSButton customTextStyle={{color: 'white'}} customBtnStyle={{width: '45%', backgroundColor: COLORS.blue}} title="Today" />
                <UTSButton customTextStyle={{color: COLORS.darkBlue}} customBtnStyle={{width: '45%', backgroundColor: 'white', borderColor: COLORS.gray_200, borderWidth: 1}} title="Clear" />
            </View>
            

            <View style={DatesStyle.scheduleContainer}>
              <Pressable onPress={() => setShowScheduleData(!showScheduleData)} style={[Commonstyles.FlexBewteen, {marginTop: 20, marginBottom: 5}]}>
                  <UTSText title="Scheduled Assignments on November 10th" preset="p" customStyle={{color: COLORS.darkBlue}} />
                  {
                    showScheduleData ? <AntDesign name="up" size={18} color={COLORS.darkBlue} /> :
                    <AntDesign name="down" size={18} color={COLORS.darkBlue} />
                  }
              </Pressable>
              {
                showScheduleData &&
                [1,2].map((item) => (
                  <ScheduleCard/>
                ))
              }
            </View>
        </View>
    </ScrollView>
    <BottomCoupleButton nextPress={continuePress} cancelPress={cancelPress} />

    </View>
  )
}

const DatesStyle = StyleSheet.create({
    datesConainer: {
        padding: 20,
        flex: 1
    },
    scheduleContainer:{
      paddingBottom: 150
    }
  });
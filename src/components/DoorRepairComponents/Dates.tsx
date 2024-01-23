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
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { setIslogin } from '../../redux/slices/auth-slices/auth-slice'

export default function Dates({continuePress, cancelPress}: any) {
  const dispatch = useDispatch()
  const [showScheduleData, setShowScheduleData] = useState(true);
  const [showActive, setShowActive] = useState<any>([])
  const [selectedDates, setSelectedDates] = useState<any>({});

  const handleDayPress = (day: any, today: boolean) => {
    if(today){
      setSelectedDates({})
        const selectedDate = moment(day).format('YYYY MM DD');
        setShowActive([1,2])
      // Toggle the selected state of the date
      const updatedDates: any = { ...selectedDates };
      if (updatedDates[selectedDate]) {
        delete updatedDates[selectedDate];
      } else {
        updatedDates[selectedDate] = { selected: true, marked: true };
      }

      // Update the state with the new selected dates
      setSelectedDates(updatedDates);

    }
    else{
      const selectedDate = day.dateString;
      setShowActive([1,2])
    // Toggle the selected state of the date
    const updatedDates: any = { ...selectedDates };
    if (updatedDates[selectedDate]) {
      delete updatedDates[selectedDate];
    } else {
      updatedDates[selectedDate] = { selected: true, marked: true };
    }

    // Update the state with the new selected dates
    setSelectedDates(updatedDates);
    setShowActive((prev: any) => [...prev, updatedDates])
    }
  };

  const nextPressHandler = () => {
    if(showActive?.length >= 2){
      continuePress()
    }
    else{
      return
    }
  }

  const onCancelPress = () => {
    dispatch(setIslogin(false))

  }
  console.log(showActive?.length)
  return (
    <View style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
        <View style={DatesStyle.datesConainer}>
            <UTSText title="Choose at least 2 available dates" preset="h3" customStyle={{color: COLORS.darkBlue}} />

            
           <View style={DatesStyle.calendarView}>
            <UTSCalendar
                onDayPress={(date: any) => {
                  handleDayPress(date, false)
                }}
                markedDates={
                  selectedDates
                }
              />
              <View style={[Commonstyles.FlexBewteen, {marginTop: 20}]}>
                  <UTSButton onPress={() =>  handleDayPress(new Date(), true) } customTextStyle={{color: 'white'}} customBtnStyle={{width: '45%', backgroundColor: COLORS.blue}} title="Today" />
                  <UTSButton onPress={() => {
                    setSelectedDates({})
                    setShowActive([])
                  }} customTextStyle={{color: COLORS.darkBlue}} customBtnStyle={{width: '45%', backgroundColor: 'white', borderColor: COLORS.gray_200, borderWidth: 1}} title="Clear" />
              </View>
           </View>
            

            <View style={DatesStyle.scheduleContainer}>
              {
                 showActive?.length >= 2  && <Pressable onPress={() => setShowScheduleData(!showScheduleData)} style={[Commonstyles.FlexBewteen, {marginTop: 20, marginBottom: 5}]}>
                <UTSText title="Scheduled Assignments on November 10th" preset="p" customStyle={{color: COLORS.darkBlue}} />
                {
                  showScheduleData ? <AntDesign name="up" size={18} color={COLORS.darkBlue} /> :
                  <AntDesign name="down" size={18} color={COLORS.darkBlue} />
                }
            </Pressable>
              }
              
              {
                (showScheduleData && showActive?.length >= 2) &&
                [1,2].map((item) => (
                  <ScheduleCard/>
                ))
              }
            </View>
        </View>
    </ScrollView>
    <BottomCoupleButton nextActive={showActive?.length >= 2 ? true : false}  nextPress={nextPressHandler} cancelPress={onCancelPress} />

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
    },
    calendarView:{
      elevation: 6,
      shadowColor: COLORS.gray_400,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      backgroundColor: 'whtie'
    }
  });
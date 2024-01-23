import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'
import { COLORS } from '../../theme/colors'
import ScheduleCard from '../ScheduleCard/ScheduleCard'
import { AntDesign } from '@expo/vector-icons';
import { Commonstyles } from '../../Styles/CommonStyles'

export default function Dates({continuePress, cancelPress}: any) {
  const [showScheduleData, setShowScheduleData] = useState(true);

  const renderItem = ({item }: any) => (
    <ScheduleCard/>
  );
  
  return (
    <View style={{flex: 1}}>
        <View style={DatesStyle.datesConainer}>
            <UTSText title="Choose at least 2 available dates" preset="h3" customStyle={{color: COLORS.darkBlue}} />

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
                <FlatList
                contentContainerStyle={{paddingBottom: 300}}
                  data={[{date: 'ddf'}, {date: 'ddssf'},{date: 'ddfss'},]}
                  renderItem={renderItem}
                  keyExtractor={item => item.date}
                  // horizontal
                  showsVerticalScrollIndicator={false}
                />
              }
            </View>
        </View>
        <BottomCoupleButton nextPress={continuePress} cancelPress={cancelPress} />
    </View>
  )
}

const DatesStyle = StyleSheet.create({
    datesConainer: {
        padding: 20
    },
    scheduleContainer:{
      
    }
  });
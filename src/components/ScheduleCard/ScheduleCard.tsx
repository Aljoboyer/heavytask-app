import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors';
import UTSText from '../UTSText/UTSText';
import { EvilIcons , MaterialCommunityIcons, FontAwesome5,FontAwesome6 } from '@expo/vector-icons';
import { Commonstyles } from '../../Styles/CommonStyles';
import { FontFamily } from '../../theme/typography';

export default function ScheduleCard() {
  return (
    <View style={ScheduleCardStyle.cardContainer}>
        <View style={[ScheduleCardStyle.pendingBtn, Commonstyles.FlexCenter, {marginBottom: 10}]}>
            <UTSText title="Pending" preset="title" customStyle={{color: COLORS.darkBlue, fontSize: 12}} />
        </View>

        <View>
             <UTSText title="Pella Window Install" preset="title2" customStyle={{color: COLORS.darkBlue, marginLeft: 4}} />

             <View style={[Commonstyles.FlexBewteen,{marginTop: 7}]}>
                <View style={Commonstyles.FlexStart}>
                    <EvilIcons name="location" size={24} color={COLORS.gray_500} />
                    <UTSText title="Rockwall, TX" preset="p" customStyle={{color: COLORS.gray_500}} />
                </View>
                <Image style={ScheduleCardStyle.Logo} source={require('../../../assets/locationImg.png')}/>
             </View>

             <View style={[Commonstyles.FlexBewteen, {marginTop: 7}]}>
                <View style={[Commonstyles.FlexStart, {marginHorizontal: 5}]}>
                    <Image style={{width: 14 ,height: 14}} source={require('../../../assets/settings.png')}/>
                    <UTSText title="Parts arrive on Nov 6th" preset="p" customStyle={{color: COLORS.gray_500, marginLeft: 5}} />
                </View>
                <MaterialCommunityIcons name="account-supervisor-outline" size={24} color={COLORS.gray_500} />
             </View>
            
            <View style={ScheduleCardStyle.emptyView}>

            </View>

             <View style={Commonstyles.FlexBewteen}>
                <View style={[Commonstyles.FlexStart, {marginLeft: 5}]}>
                    <FontAwesome5 name="calendar-alt" size={18} color={COLORS.gray_500} />
                    <UTSText title="Nov 10th" preset="p" customStyle={{color: COLORS.gray_500, marginLeft: 4}} />
                </View>
                <View style={[Commonstyles.FlexCenter, {backgroundColor: COLORS.ground_yellow, padding: 5, borderRadius: 10,}]}>
                     <FontAwesome6 name="clock-four" size={13} color="#723B13" />
                     <UTSText title="Morning" preset="title" customStyle={{color: "#723B13", fontFamily: FontFamily.Medium, fontSize: 12,  marginLeft: 5}}  />
                  </View>
             </View>

        </View>
    </View>
  )
}

const ScheduleCardStyle = StyleSheet.create({
    cardContainer: {
        padding: 10,
        borderWidth: 1, 
        borderColor: COLORS.gray_200,
        borderRadius: 10,
        marginTop: 10
    },
    pendingBtn:{
        backgroundColor: COLORS.gray_100,
        borderRadius: 5,
        padding: 4,
        width: 67
    },
    Logo:{
        width: 58,
        height: 32
    },
    emptyView:{
        height: 2,
        marginVertical: 10,
        backgroundColor: COLORS.gray_200
    }
  });
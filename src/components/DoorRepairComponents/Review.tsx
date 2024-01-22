import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UTSText from '../UTSText/UTSText'
import BottomCoupleButton from '../BottomCoupleButton/BottomCoupleButton'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import { Commonstyles } from '../../Styles/CommonStyles';
import { FontFamily } from '../../theme/typography';

export default function Review({continuePress, cancelPress}: any) {
  const schedule = ['November 10th, 2023', 'November 16th, 2023']
  return (
    <View style={{flex: 1}}>
        <View style={ReviewStyle.ReviewConainer}>
            <UTSText title="Does this look correct?" preset="h3" customStyle={{color: COLORS.darkBlue}} />

            <View style={[ReviewStyle.reviewCardStyle, {marginTop: 20}]}>
              <View style={Commonstyles.FlexBewteen}>
                  <UTSText title="Assigned to" preset="title1" customStyle={{color: COLORS.darkBlue}}  />
                  <MaterialCommunityIcons name="account-supervisor-outline" size={24} color={COLORS.gray_500} />
              </View>
                <UTSText title="Giannis Antetokounmpo" preset="title" customStyle={{color: COLORS.gray_500, marginTop: 10}}  />
            </View>

            {
              schedule?.map((itme) => (
                <View style={[ReviewStyle.reviewCardStyle, Commonstyles.FlexBewteen, {marginTop: 10,  height: 56}]}>

                  <UTSText title={itme} preset="title" customStyle={{color: COLORS.gray_500, marginTop: 10}}  />

                  <View style={[Commonstyles.FlexCenter, {backgroundColor: COLORS.ground_yellow, padding: 7, borderRadius: 10}]}>
                     <AntDesign name="clockcircle" size={14} color="#723B13" />
                     <UTSText title="Morning" preset="title" customStyle={{color: "#723B13", fontFamily: FontFamily.Medium, fontSize: 12,  marginLeft: 5}}  />
                  </View>
                </View>
              ))
            }
            <UTSText numberOfLines={8} title="Once submitted, the homeowner will get a text with these dates and can select which one works for them. Once they respond, your appointment will be finalized. If the customer provides an alternative date you will receive a push notification to confirm the date they provided or provide new dates to select. " preset="small" customStyle={{color: COLORS.gray_500, marginTop: 20}}  />

        </View>
        <BottomCoupleButton nextActive={true} nextPress={continuePress} cancelPress={cancelPress} />
    </View>
  )
}

const ReviewStyle = StyleSheet.create({
    ReviewConainer: {
        padding: 20
    },
    reviewCardStyle:{
      borderWidth: 1, 
      borderColor: COLORS.gray_200,
      borderRadius: 10,
      padding: 10
    }
  });
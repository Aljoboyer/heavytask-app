import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Commonstyles } from '../../Styles/CommonStyles';
import { COLORS } from '../../theme/colors';
import UTSText from '../../components/UTSText/UTSText';
import UTSInputs from '../../components/UTSInputs/UTSInputs';
import UTSButton from '../../components/UTSButton/UTSButton';
import CheckBox from '../../components/CheckBox/CheckBox';
 
export default function Login({navigation} : any) {
  const [checked, setChecked] = useState(false);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.CommonBg}}>
        <View style={LoginStyle.loginInputContainer}>
            <View style={Commonstyles.FlexCenter}>
              <Image style={LoginStyle.Logo} source={require('../../../assets/utslogo.png')}/>
            </View>

          <View style={{marginTop: 30}}>
              <UTSText title="Login" preset="h1"/>

              <View style={{marginVertical: 15}}>
                <UTSText title="Phone Number" preset="title"/>

                <UTSInputs placeholder="123-456-7890" customStyle={{marginTop:10, height: 52}}/>
              </View>

              <View style={[Commonstyles.FlexBewteen, {marginVertical: 15}]}>
                 
                 <View style={Commonstyles.FlexCenter}>
                    <Pressable onPress={() => setChecked(!checked)}>
                      <CheckBox checked={checked} />
                    </Pressable>
                  <UTSText title="Remember me" preset="title" customStyle={{color: COLORS.darkGray, marginStart: 4}}/>
                 </View>

                <View style={Commonstyles.FlexCenter}>
                    <Image style={LoginStyle.FaceLogo} source={require('../../../assets/face id.png')}/>
                   <UTSText title="Face ID" preset="title" customStyle={{color: COLORS.lightBlue, marginStart: 6}}/>
                </View>
              </View>

              <UTSButton onPress={() => navigation.navigate('DoorRepair')} title="Login" customTextStyle={{color: 'white'}} customBtnStyle={{marginTop: 50}} />
          </View>
        </View>

        <View style={[Commonstyles.FlexCenter, LoginStyle.bottomView]}>
              <UTSText title="© 2024 UTS, LLC. All rights reserved." preset="p" customStyle={{color: COLORS.darkGray}}/>
        </View>

    </SafeAreaView>
  )
}

const LoginStyle = StyleSheet.create({
  Logo: {
    width: 90,
    height: 40,
    marginTop: 30,
    
  },
  loginInputContainer:{
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginTop: '20%',
    elevation: 6,
    shadowColor: COLORS.gray_400,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  FaceLogo:{
    width: 24,
    height: 24
  },
  bottomView:{
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20
  }
});
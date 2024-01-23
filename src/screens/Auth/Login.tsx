import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Commonstyles } from '../../Styles/CommonStyles';
import { COLORS } from '../../theme/colors';
import UTSText from '../../components/UTSText/UTSText';
import UTSInputs from '../../components/UTSInputs/UTSInputs';
import UTSButton from '../../components/UTSButton/UTSButton';
import CheckBox from '../../components/CheckBox/CheckBox';
import { useDispatch } from 'react-redux';
import { setIslogin } from '../../redux/slices/auth-slices/auth-slice';
 
export default function Login({navigation} : any) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [hideBottomView, setHideBottomView] = useState(false);

  const loginHandler = () => {
    if(phone.length == 11){
      setError('')
      setIsLoading(true)
    
      setTimeout(() => {
        dispatch(setIslogin(true))
        setIsLoading(false)
      }, 1000);
    }
    else{
      setError('Please write your 11digit phone number')
    }
  }

  const onCHangeHandler = (phonetext: string) => {
    setError('')
    setPhone(phonetext)
  }
  console.log('phone >>', phone)
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

                <UTSInputs
                onBlur={() => setHideBottomView(false)}
                onFocus={() => setHideBottomView(true)}
                 onChangeText={onCHangeHandler} 
                 maxLength={11}
                 keyboardType='number-pad' placeholder="123-456-7890" customStyle={{marginTop:10, height: 52}}/>
                 {
             
                 error && <UTSText title={error} preset="Xsmall" customStyle={{color: 'red', marginTop: 5}} />
                 }
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

              <UTSButton onPress={() => loginHandler()} title={isLoading ? 'Loading...' : 'Login'} customTextStyle={{color: 'white'}} customBtnStyle={{marginTop: 50}} />
          </View>
        </View>
          
          {
            !hideBottomView && <View style={[Commonstyles.FlexCenter, LoginStyle.bottomView]}>
            <UTSText title="© 2024 UTS, LLC. All rights reserved." preset="p" customStyle={{color: COLORS.darkGray}}/>
      </View>
          }
 

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
    marginTop: '25%',
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
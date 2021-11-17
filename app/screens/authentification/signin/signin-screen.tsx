import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, Image, ImageStyle, SafeAreaView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Profile, Screen, Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"
import { useNavigation } from "@react-navigation/core"
import { useStores } from "../../../models"
const gear9_logo=require("../../../../assets/images/gear9logo.jpg");
import moment from 'moment';
import MapView from 'react-native-maps';
import Pdf from "react-native-pdf"



export const SigninScreen = observer(function SigninScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const {ProfileStore}=useStores();
  const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' };

  // Pull in navigation via hook
 
   const navigation = useNavigation();
   const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      
      return false
     
    }
    else {
     return true
    }
  }
  const Password_RegExp=(text)=>{
    let regpassword =/[0-9]{8}$/
    if (regpassword.test(text)){
      return true
    }
    else {
      return false
    }
  }
  const Email_RegExp=(text)=>{
    let regemail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (regemail.test(text)){
      return true
    }
    else {
      return false
    }
  }
  const [profileInputs,SetProfileInputs]=useState({
    profileEmail : "",
    profilePassword:""
  })
  const formating=require("moment")
  useEffect(()=>{
    //console.log(formating().format('DD YYYY MM'))
  })
  return (
    <Screen style={ROOT} preset="scroll">
        <SafeAreaView>
        <View>
     <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={PDF_View}/>
                    </View>
     
      </SafeAreaView>
    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
}
const HEADER_STYLE : ViewStyle = {
  alignSelf : 'center',
  marginVertical:metrics.heightPercentageToDP(5),
}

const BUTTON_SIGNIN :ViewStyle={
  alignSelf:'center',
  margin: metrics.widthPercentageToDP(2),
  backgroundColor:'black',
  borderRadius:10,
}
const TextButton:TextStyle={
  fontSize:20,
}
const LOGO : ImageStyle={
  alignSelf:'center',
  margin:metrics.widthPercentageToDP(5),
  borderRadius:20,
  width:metrics.widthPercentageToDP(90),
  height:metrics.heightPercentageToDP(25),
}
const PDF_View : ViewStyle={
  flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
}


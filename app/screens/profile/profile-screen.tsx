import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { Button, Profile, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import metrics from "../../theme/metrics"
import { useStores } from "../../models"

const gear9_logo=require("../../assets/images/gear9logo.jpeg");

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const {ProfileStore}=useStores();
  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [profileInputs,SetProfileInputs]=useState({
    profileEmail : "",
    profilePassword:""
  })
  useEffect(()=>{
      console.log(ProfileStore.getEmail)
  })
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="SINGIN" style={HEADER_STYLE} />
      
     <Profile  textinput="Enter Your Email"
      onChangeText={(text)=>profileInputs.profileEmail=text}
      />
     <Profile  textinput="Enter Your Password"
      onChangeText={(text)=>profileInputs.profilePassword=text}
      secureTextEntry={true}
     />
     <Button text="SIGN IN" style={BUTTON_SIGNIN} textStyle={TextButton}
     onPress={()=>{SetProfileInputs({
       profileEmail:profileInputs.profileEmail,
       profilePassword:profileInputs.profilePassword,
     })}}
     />

    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const HEADER_STYLE : ViewStyle = {
  alignSelf : 'center',
  marginVertical:metrics.heightPercentageToDP(5),
}

const BUTTON_SIGNIN :ViewStyle={
  alignSelf:'center',
  margin: metrics.widthPercentageToDP(2),
}
const TextButton:TextStyle={
  fontSize:15,
}
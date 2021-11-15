import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TextStyle, View, ViewStyle } from "react-native"
import { Button, Profile, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import metrics from "../../theme/metrics"



export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [profileInputs,SetProfileInputs]=useState({
    profileEmail : "",
    profilePassword:""
  })
  useEffect(()=>{
      console.log(profileInputs)
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
     <Button text="SIGN IN " style={BUTTON_SIGNIN} textStyle={TextButton}
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
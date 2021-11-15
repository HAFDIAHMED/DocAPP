import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, SafeAreaView, TextStyle, ViewStyle } from "react-native"
import { Button, Profile, Screen, Text } from "../../../components"
import { useNavigation } from "@react-navigation/native"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"
import { useStores } from "../../../models"



export const SignupScreen = observer(function SignupScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const {ProfileStore}=useStores();
  // Pull in navigation via hook
   const navigation = useNavigation()
  const [profileInputs,SetProfileInputs]=useState({
    profileEmail : "",
    profilePassword:""
  })
  return (
    <Screen style={ROOT} preset="scroll">
         <SafeAreaView>
      <Text preset="header" text="SINGUP To Gear9" style={HEADER_STYLE} />
      <Profile  textinput="Enter Your Email"
      onChangeText={(text)=>profileInputs.profileEmail=text}
      />
     <Profile  textinput="Enter Your Password"
      onChangeText={(text)=>profileInputs.profilePassword=text}
      secureTextEntry={true}
     />
     <Button text="SIGN UP" style={BUTTON_SIGNIN} textStyle={TextButton}
     onPress={()=>{SetProfileInputs({
       profileEmail:profileInputs.profileEmail,
       profilePassword:profileInputs.profilePassword,
     });
     ProfileStore.Register(profileInputs.profileEmail,profileInputs.profilePassword);
     if(ProfileStore.status===200){
      navigation.navigate("signin")
      ProfileStore.setStatus(123)
    }

    }
  }
     />
      </SafeAreaView>
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
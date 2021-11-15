import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, ImageStyle, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { Button, Profile, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import metrics from "../../theme/metrics"
import { useStores } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { TouchableOpacity } from "react-native-gesture-handler"

const gear9_logo=require("../../../assets/images/gear9logo.jpg");

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  //const {ProfileStore}=useStores();
  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [profileInputs,SetProfileInputs]=useState({
    profileEmail : "",
    profilePassword:""
  })
  useEffect(()=>{
    //console.log(ProfileStore.Login("nilson@email.com","nilson"))
   // console.log(ProfileStore.getEmail)
      //console.log(ProfileStore.getEmail)
  })
  return (
    <Screen style={ROOT} preset="scroll">
      <SafeAreaView>
      <Text preset="header" text="Welcome To Gear9" style={HEADER_STYLE} />
      <View style={PROFILE_ITEM}>
        <Text>Your Email : ahmed@gmail.com </Text>
        </View>  
        <View style={PROFILE_ITEM}>
        <Text>Your Password : ahmed </Text>
        </View> 
        <View style={PROFILE_ITEM}>
        <Text>Your Token : ahmed </Text>
        </View>
        
        <TouchableOpacity style={LogOut}>
          <Text>LogOut</Text>
          </TouchableOpacity>   
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

const PROFILE_ITEM:ViewStyle={
  borderWidth:1,
  borderColor:"white",
  borderRadius:5,
  marginHorizontal:metrics.widthPercentageToDP(3),
  marginVertical:metrics.heightPercentageToDP(1),
}
const LOGOUT:ViewStyle={
  alignSelf:'center',
}
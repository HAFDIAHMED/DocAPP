import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, ImageStyle, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { Button, Profile, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import metrics from "../../theme/metrics"
import { useStores } from "../../models"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"

const gear9_logo=require("../../../assets/images/gear9logo.jpg");

export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const {ProfileStore}=useStores();
  // Pull in navigation via hook
   const navigation = useNavigation()
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    //console.log(ProfileStore.Login("nilson@email.com","nilson"))
   //ProfileStore.GetProducts(ProfileStore.getToken)
   //console.log(ProfileStore.products[0])
   //console.log(ProfileStore.status)
   //console.log("hello")
      //console.log(ProfileStore.getEmail)
  })
  return (
    <Screen style={ROOT} preset="scroll">
      <SafeAreaView>
      <Text preset="header" text="Welcome To Gear9" style={HEADER_STYLE} />
      <View style={PROFILE_ITEM}>
        <Text>Your Email : {ProfileStore.email} </Text>
        </View>  
        <View style={PROFILE_ITEM}>
        <Text>Your Password : {ProfileStore.password}  </Text>
        </View> 
        <View style={PROFILE_ITEM}>
        <Text>Your Token : {ProfileStore.token}  </Text>
        </View>
        <Button style={BUTTON_SIGNIN} textStyle={TextButton}  text="LOGOUT" onPress={()=>{navigation.navigate("signin");ProfileStore.setStatus(123)}} /> 
        {
          ProfileStore.products.map((prod,index)=>{
            return (
              <ScrollView >
            <View style={PRODUCTS_STYLE}>
                <Text>name : {prod.name}</Text>
                <Text>familyid : {prod.familyId}</Text>
                <Text>cost : {prod.cost}</Text>
                <Text>Quantity : {prod.quantity}</Text>

              </View>
              </ScrollView>
              
            );
          })
        }
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
const BUTTON_SIGNIN :ViewStyle={
  alignSelf:'center',
  margin: metrics.widthPercentageToDP(2),
  backgroundColor:'black',
  borderRadius:10,
}
const TextButton:TextStyle={
  fontSize:20,
}
const PRODUCTS_STYLE : ViewStyle={
  alignSelf:'center',
  borderWidth:1,
  marginHorizontal:metrics.widthPercentageToDP(3),
  paddingHorizontal:metrics.heightPercentageToDP(1),
  marginVertical:metrics.heightPercentageToDP(1),
}
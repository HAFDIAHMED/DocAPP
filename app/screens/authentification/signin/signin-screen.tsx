import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Image, ImageStyle, SafeAreaView, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { Button, Profile, Screen, Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"
import { useNavigation } from "@react-navigation/core"
import { useStores } from "../../../models"


const gear9_logo=require("../../../../assets/images/gear9logo.jpg");

export const SigninScreen = observer(function SigninScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const {ProfileStore}=useStores();

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
  const [profileInputs,SetProfileInputs]=useState({
    profileEmail : "",
    profilePassword:""
  })
  const pattern = /e/

  useEffect(()=>{
     pattern.test("ahmed hafdi")
     console.log(pattern.test("ahmed"))
  })
  return (
    <Screen style={ROOT} preset="scroll">
        <SafeAreaView>
      <Text preset="header" text="SINGIN To Gear9" style={HEADER_STYLE} />
      <Image source={gear9_logo} style={LOGO}/>
     <Profile  textinput="Enter Your Email"
      onChangeText={(text)=>
        {
          if (validate(text)){
          profileInputs.profileEmail=text

        }
        else {
          console.log(validate(text))
        }
      }
    }
  
      />
     <Profile  textinput="Enter Your Password"
      onChangeText={(text)=>profileInputs.profilePassword=text}
      secureTextEntry={true}
     />
     <Button text="SIGN IN" style={BUTTON_SIGNIN} textStyle={TextButton}
     onPress={()=>{SetProfileInputs({
       profileEmail:profileInputs.profileEmail,
       profilePassword:profileInputs.profilePassword,
     });
     ProfileStore.Login(profileInputs.profileEmail,profileInputs.profilePassword);
    if(ProfileStore.status===200){
      navigation.navigate("profile")
     
    }
    ProfileStore.setStatus(123)
    

    }}
     />
     <TouchableOpacity onPress={()=>navigation.navigate("signup")}>
     <Text>Dont you have an account , Register</Text>

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

import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import {  TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import metrics from "../../theme/metrics"
import { FAB } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler"
//import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

export const LiveChatScreen = observer(function LiveChatScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const [openChat,setOpenChat]=useState(false);
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="live chat screen"   style= {TEXT_STYLE}/>
      <Button text="Live Message" style={Button_Message}  textStyle={TEXT_STYLE} onPress={()=>navigation.navigate("live_message")}/>
      <View style={CHAT_container}>
      <TouchableOpacity style={CHAT_BUTTON} onPress={()=>setOpenChat(true)}>
        <Icon  name ="chatbox-outline"  color="black" size={40}  />

      </TouchableOpacity>
      <Modal isVisible={openChat} >

      <View style={{ flex: 1 ,backgroundColor:'white'}}>
          <Text>Hello!</Text>

          <Button text="Hide modal" onPress={()=>setOpenChat(!openChat)} />
        </View>
      </Modal>
      </View>
      
      
      
    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.lighterGrey,
  flex: 1,
}

const TEXT_STYLE : TextStyle={
  color : "black", fontSize:20,alignSelf:'center'
}
const Button_Message : ViewStyle={
  alignSelf:'center',
  margin:metrics.widthPercentageToDP(2),
 
}
const CHAT_BUTTON :ViewStyle={
  //borderWidth:3,
  borderColor:'orange',
  borderRadius:50,
  height:100,
  width:100, 
  alignItems:'center',
  justifyContent:'center',
  //position:'absolute',
  backgroundColor:'white',
 marginRight:metrics.widthPercentageToDP(4),
 shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
 
}
const CHAT_container :ViewStyle={
  position:'absolute',
  bottom:metrics.heightPercentageToDP(10),
  alignSelf :'flex-end',
  
}
 

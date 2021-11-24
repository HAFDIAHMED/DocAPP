import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import metrics from "../../theme/metrics"
import { FAB } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler"



export const LiveChatScreen = observer(function LiveChatScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="live chat screen"   style= {TEXT_STYLE}/>
      <Button text="Live Message" style={Button_Message}  textStyle={TEXT_STYLE} onPress={()=>navigation.navigate("live_message")}/>
      <TouchableOpacity style={CHAT_BUTTON}>
        <Text style={TEXT_STYLE}>Live Message</Text>
      </TouchableOpacity>
    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
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
  borderWidth:1,
  borderRadius:20,
}
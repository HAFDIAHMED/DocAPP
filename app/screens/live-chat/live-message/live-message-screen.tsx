import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"
import WebView from "react-native-webview"



export const LiveMessageScreen = observer(function LiveMessageScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="live message" style={TEXT_STYLE} />
      <WebView
          source={{
            uri: 'https://secure.livechatinc.com/licence/13309296/v2/open_chat.cgi',
          }}
        />
        <Text style={TEXT_STYLE}>Hello</Text>
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


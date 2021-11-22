import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import QRCode from 'react-native-qrcode-svg';



export const QrCodeGeneratorScreen = observer(function QrCodeGeneratorScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      
      <Text preset="header" text="Qr Code"  style={{alignSelf:'center'}}/>
      <View style={QR_STYLE}>
      <QRCode
      value="helsslo"
      size={300}
    />
      </View>

      

    </Screen>
  )
})

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  justifyContent:'center',
  alignItems:'center',
}
const QR_STYLE :ViewStyle={
  alignSelf:'center',
 
}
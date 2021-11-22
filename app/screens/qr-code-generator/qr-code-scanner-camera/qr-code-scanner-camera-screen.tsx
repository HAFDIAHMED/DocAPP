import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,TouchableOpacity,Linking } from "react-native"
import { Screen, Text} from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const QrCodeScannerCameraScreen = observer(function QrCodeScannerCameraScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="camera" />
    </Screen>
  )
})

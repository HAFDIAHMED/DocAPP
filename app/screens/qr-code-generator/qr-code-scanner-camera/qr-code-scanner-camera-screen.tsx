import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle,TouchableOpacity,Linking } from "react-native"
import { Screen, Text} from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import QRCodeScanner from 'react-native-qrcode-scanner';

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const QrCodeScannerCameraScreen = observer(function QrCodeScannerCameraScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const Read_Qr_Code= e =>{
    Linking.openURL(e.data).catch(err=>
      console.error("An error occured ",err)
      )
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="camera" />
      {/*<QRCodeScanner 
      onRead={Read_Qr_Code}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text>
          Go to {''}
        </Text>
      }

      /> */}
    </Screen>
  )
})

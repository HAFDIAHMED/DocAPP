import React, { useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { CameraRoll , ToastAndroid,Alert, Share ,TextInput, TouchableOpacity, View,Linking, ViewStyle } from "react-native"
import { Screen, Text} from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import QRCodeScanner from 'react-native-qrcode-scanner';
//import { RNCamera } from 'react-native-camera';
import RNFS from "react-native-fs"



export const QrCodeScannerCameraScreen = observer(function QrCodeScannerCameraScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  let svg1= useRef("");


const [imageSave,SetSave]=useState({ busy: false, imageSaved: true  })
const saveQrToDisk=()=> {
  svg1.toDataURL((data) => {
    RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
      .then((success) => {
        return CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+"/some-name.png", 'photo')
      })
      .then(() => {
        SetSave({ busy: false, imageSaved: true  })
        ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
      })
  })
}
  const Read_Qr_Code= e =>{
    ///console.log(e.data);
    Linking.openURL(e.data).catch(err=>
      console.error("An error occured ",err)
      )
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="camera" />
      <QRCodeScanner 
      onRead={Read_Qr_Code}
      //flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text>
          Go to {''}
        </Text>
      }

      /> 
    </Screen>
  )
})

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
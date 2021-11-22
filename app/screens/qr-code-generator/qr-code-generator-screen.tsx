import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import QRCode from 'react-native-qrcode-svg';
import metrics from "../../theme/metrics"



export const QrCodeGeneratorScreen = observer(function QrCodeGeneratorScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [qrValue,SetQRValue]=useState("");

  return (
    <Screen style={ROOT} preset="scroll">
      
      <Text preset="header" text="Qr Code"  style={{alignSelf:'center'}}/>
      <View style={INPUT_QR}>
      <TextInput 
      placeholder='put url to convert to qr code '
      style={{color:'white'}}
      />
      </View>
     
      <View style={QR_STYLE}>
      <QRCode
      value="https://gear9.ma/"
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
  borderWidth:1,
  borderColor:'white',
  padding:metrics.widthPercentageToDP(8),
  backgroundColor:'white',
  alignSelf:'center',
  margin:metrics.heightPercentageToDP(3),
 
}
const INPUT_QR : ViewStyle={
  borderWidth:1,
  borderColor:'white',
  borderRadius:10,
  backgroundColor:'white'
}
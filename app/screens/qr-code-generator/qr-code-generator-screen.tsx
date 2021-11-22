import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { Alert, TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import QRCode from 'react-native-qrcode-svg';
import metrics from "../../theme/metrics"
import Icon from 'react-native-vector-icons/FontAwesome5';
import QRCodeScanner from 'react-native-qrcode-scanner';


export const QrCodeGeneratorScreen = observer(function QrCodeGeneratorScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [qrValue,SetQRValue]=useState("hello");
  const Qr_Value_Validate=(newValue)=>{
      if (newValue===''){
        Alert.alert("qr code value shouldnt be empty enter a not emply value !")
      }
      else{
        SetQRValue(newValue);
        
      }
  }
  

  return (
    <Screen style={ROOT} preset="scroll">
      
      <Text preset="header" text="Qr Code"  style={{alignSelf:'center'}}/>
      <View style={INPUT_QR}>
      <TextInput 
      placeholder='put url to convert to qr code '
      style={{fontSize:15}}
      onChangeText={(value)=>Qr_Value_Validate(value)}
      />
      </View>
     
      <View style={QR_STYLE}>
      <QRCode
      value={qrValue}
      size={300}
      
    />
      </View>
      
      <TouchableOpacity style={SCANNER_QR} onPress={()=>navigation.navigate("qr_code_scanner")}>
        <Text>Open Scanner</Text>
      <Icon  name ="camera"  color="white" size={40}  />

      </TouchableOpacity>


      

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
const SCANNER_QR :ViewStyle={
  alignItems:'center',
}
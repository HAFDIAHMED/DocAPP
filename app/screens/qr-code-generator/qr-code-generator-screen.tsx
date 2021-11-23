import React, { useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { CameraRoll , ToastAndroid,Alert, Share ,TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import QRCode from 'react-native-qrcode-svg';
import metrics from "../../theme/metrics"
import Icon from 'react-native-vector-icons/FontAwesome5';
//import QRCodeScanner from 'react-native-qrcode-scanner';
import RNFS from "react-native-fs"


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
  const [svg,setSvg]=useState("");
  let svg1= useRef("");
  const callback=(dataURL)=>{
    console.log(dataURL);
    let shareableQrCode={
      message : 'Qr Code message ',

      dataURL: `data:image/png;base64,${dataURL}`,
    
    }
    Share.share(shareableQrCode).catch(error=>console.log(error))
  }
  const saveQrcode =()=>{
    callback(svg1.toDataURL())
  }
  const [imageSave,SetSave]=useState({ busy: false, imageSaved: true  })
  const saveQrToDisk=()=> {
    svg1.toDataURL((data) => {
      RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
        
        .then(() => {
          SetSave({ busy: false, imageSaved: true  })
          ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
        })
    })
 }
  useEffect(()=>{
    //console.log(svg1)
  });
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
      getRef={c => (svg1 = c)}
      
  
      
    />
      </View>
      <View style={QR_TOOLS_ROW}>
      <TouchableOpacity style={SCANNER_QR} onPress={()=>navigation.navigate("qr_code_scanner")}>
        <Text>Open Scanner</Text>
      <Icon  name ="camera"  color="white" size={40}  />

      </TouchableOpacity>
      <TouchableOpacity style={SCANNER_QR} onPress={()=>{callback(svg1);saveQrToDisk()}}>
        <Text>Share Qr code</Text>
      <Icon  name ="share"  color="orange" size={40}  />

      </TouchableOpacity>
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
const SCANNER_QR :ViewStyle={
  alignItems:'center',
  margin:metrics.widthPercentageToDP(1),
  borderWidth:1,
  alignContent:'center',
  justifyContent:'center',
  padding:metrics.widthPercentageToDP(1),
  borderColor:'white',
  borderRadius:10,
}
const QR_TOOLS_ROW : ViewStyle={
  flexDirection:'row',
}
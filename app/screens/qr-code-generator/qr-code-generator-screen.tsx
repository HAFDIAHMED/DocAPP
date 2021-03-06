import React, { useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppRegistry,Alert, Share ,TextInput, TouchableOpacity, View, ViewStyle, ToastAndroid } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import QRCode from 'react-native-qrcode-svg';
//import QRCode from 'react-native-qrcode-image';

import metrics from "../../theme/metrics"
import Icon from 'react-native-vector-icons/FontAwesome5';
//import QRCodeScanner from 'react-native-qrcode-scanner';
import RNFS from "react-native-fs"
import CameraRoll from "@react-native-community/cameraroll";

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
  
 
  useEffect(()=>{
    console.log("heloooooo")
  });
  let svg=useRef("");
  const SaveQrCode=()=>{
    svg.toDataURL((data)=>{

      RNFS.writeFile(RNFS.CachesDirectoryPath+`/qr.png`,data,"base64" )
      .then((success)=>{
        
        return CameraRoll.save(RNFS.CachesDirectoryPath+`/qr.png`,"photo" );
      
      })
      .catch((e)=>{
        console.log("saveToGallery",e)
      })
    })
  }
  
  const ShareQrCode=(dataURL)=>{

    let shareImageBase64={
      title : `${qrValue}`,
      url : `data:image/png;base64,${dataURL}`,
      subject: `Share Qr Code : ${qrValue}`
    }
    Share.share(shareImageBase64).catch(error=>console.log(error));
    console.log(shareImageBase64.url)
  }
  const QR_Code=()=>{
    svg.toDataURL((data)=>{
      ShareQrCode(data)
    })
  }
  const shareQR1=()=> {
    svg.toDataURL((data) => {
      const shareImageBase64 = {
        title: "QR",
        message: "Ehi, this is my QR code",
        url: `data:image/png;base64,${data}`
      };
      Share.share(shareImageBase64);
      //console.log(shareImageBase64.url)
    });
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
      getRef={c => (svg = c)}
    />
      </View>
      <View style={QR_TOOLS_ROW}>
      <TouchableOpacity style={SCANNER_QR} onPress={()=>navigation.navigate("qr_code_scanner")}>
        <Text>Open Scanner</Text>
      <Icon  name ="camera"  color="white" size={40}  />

      </TouchableOpacity>
      <TouchableOpacity style={SCANNER_QR} onPress={()=>{console.log("hello");SaveQrCode();ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT);}}>
        <Text>Save Qr code</Text>
      <Icon  name ="file"  color="white" size={40}  />

      </TouchableOpacity>
      <TouchableOpacity style={SCANNER_QR} onPress={()=>{console.log("Share");shareQR1()}}>
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
  alignItems:'center',
  margin:metrics.widthPercentageToDP(3),
  width:metrics.widthPercentageToDP(95)
 
}
const INPUT_QR : ViewStyle={
  borderWidth:1,
  borderColor:'white',
  borderRadius:10,
  backgroundColor:'white',
  //width : metrics.widthPercentageToDP(1),
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
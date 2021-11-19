import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import metrics from "../../theme/metrics"
import Share from "react-native-share";

import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
export const PdfViewScreen = observer(function PdfViewScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
   const navigation = useNavigation()
   const url = "https://awesome.contents.com/";
   const title = "Awesome Contents";
   const message = "Please check this out.";
   const options = {
    title,
    url,
    message,
  };
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  


  return (
    <Screen  preset="scroll">
      <View style={Map_Container}>
     {/*<Text preset="header" text="PDF VIEW" style={{ alignSelf:'center',margin: metrics.heightPercentageToDP(2)}} /> */} 

     {/*
      <Button text="OPEN PDF FILE" style={Button_Pdf} textStyle={Button_Text} onPress={()=>navigation.navigate("pdf_reader")}/>
      <Button text="DOWNLOAD PDF FILE" style={Button_Pdf} textStyle={Button_Text}/> */}
       <MapView
       provider={PROVIDER_GOOGLE}
      style={styles.map}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       showUserLocation={true} >
       <Marker coordinate={{
         latitude: 37.78825,
         longitude: -122.4324,
       }}  />
       </MapView>
       
      </View>
    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  alignItems:'center',
  justifyContent:'center',
}
const Button_Pdf : ViewStyle={

 alignSelf:'center',
 margin: metrics.widthPercentageToDP(2)
}
const Button_Text:TextStyle={
  fontSize:20,
}

const Map_Container : ViewStyle={
  height: metrics.heightPercentageToDP(100),
           width: metrics.widthPercentageToDP(100),
           justifyContent: 'flex-end',
           alignItems: 'center',
}
const styles = StyleSheet.create({

  map: {
        ...StyleSheet.absoluteFillObject,
  },
})
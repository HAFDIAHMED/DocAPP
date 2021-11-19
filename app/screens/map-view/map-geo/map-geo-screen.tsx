import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"
import MapView, { Marker, Polygon, PROVIDER_GOOGLE } from "react-native-maps"



export const MapGeoScreen = observer(function MapGeoScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const Map_View =()=>{
return(
  <MapView

       provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        
        latitude: 33.56729634144786,
        longitude: -7.6277178270787225,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}       showsUserLocation={true} >
       <Marker coordinate={{
         latitude: 33.56729634144786,
         longitude: -7.6277178270787225,
       }} 
       image={{uri : "https://www.pngkit.com/bigpic/u2q8a9e6y3w7a9u2/"}}
       />
       </MapView>
);
      }
 const Polygone_View =()=>{
   return (
    <MapView>
    <Polygon
    coordinates={[
            { latitude: 37.8025259, longitude: -122.4351431 },
             
        {latitude: 33.56729634144786,
        longitude: -7.6277178270787225,}
        ]}
    />
  </MapView>
   );
 }
  
  
  return (
    <Screen style={ROOT} preset="scroll">
   <Polygone_View />
    </Screen>
  )
})

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  alignItems:'center',
  justifyContent:'center',
}

const Button : ViewStyle={

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
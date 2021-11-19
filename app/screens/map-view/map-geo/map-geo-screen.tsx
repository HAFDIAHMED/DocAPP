import React from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"



export const MapGeoScreen = observer(function MapGeoScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
   <MapView
       provider={PROVIDER_GOOGLE}
      style={styles.map}
      
       showUserLocation={true} >
       <Marker coordinate={{
         latitude: 37.78825,
         longitude: -122.4324,
       }}  />
       </MapView>
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
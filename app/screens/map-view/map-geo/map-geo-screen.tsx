import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { Screen, Button,Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"
import MapView, { Callout, Marker, Polygon, PROVIDER_GOOGLE } from "react-native-maps"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Standard,Night,Retro} from "../map-geo/map_many/mapStyles_variation"
export const MapGeoScreen = observer(function MapGeoScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  
  const [styleChange , setStyleChange]=useState(true)
 
 const [mapStyles,setMapStyles]=useState(Standard)
  const Map_View =()=>{
return(

    <MapView

provider={PROVIDER_GOOGLE}
style={styles.map}
customMapStyle={mapStyles}
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
  const MAPS=()=>{
    return (
      <Callout style={MAPS_STYLE}>
        
      <View style={ROW_STYLES_MAP}>

      <TouchableOpacity style={MAP_STYLE_PAGE} onPress={()=>setMapStyles(Night)}>
      <Icon  name ="moon"  color="black" size={30}  />
      <Text style={MAP_STYLE_TEXT}>Night</Text>
      </TouchableOpacity>
      <TouchableOpacity style={MAP_STYLE_PAGE} onPress={()=>setMapStyles(Retro)}>
      <Icon name ="home"  color="yellow" size={30} />
      <Text style={MAP_STYLE_TEXT}>Retro</Text>

      </TouchableOpacity>
      <TouchableOpacity style={MAP_STYLE_PAGE} onPress={()=>setMapStyles(Standard)}>
      <Icon name ="sun"  color="orange" size={30} />
      <Text style={MAP_STYLE_TEXT}>Standard</Text>

      </TouchableOpacity>
      

      
      </View>
           
              </Callout>
    );
  }
  useEffect(()=>{
    //console.log(Standard)
  })
  return (
    <Screen style={ROOT} preset="scroll">
   <Map_View />
   <MAPS/>
    </Screen>
  )
})

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  alignItems:'center',
  justifyContent:'center',
}

const Button_Style : ViewStyle={

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
const ROW_STYLES_MAP : ViewStyle={
  //flexDirection:'row',
}
const MAP_STYLE_PAGE : ViewStyle={
   margin :metrics.widthPercentageToDP(2),
   justifyContent:'center',
   alignItems:'center',
   width:metrics.widthPercentageToDP(20),
   height:metrics.heightPercentageToDP(10),
   backgroundColor:'white',
   borderRadius:20,
}
const  MAP_STYLE_TEXT : TextStyle={
  color:'black',
}
const MAPS_STYLE :ViewStyle={
  alignSelf:'flex-end',
 
}
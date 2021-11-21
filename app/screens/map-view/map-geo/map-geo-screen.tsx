import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, TextStyle, View, ViewStyle ,Image} from "react-native"
import { Screen, Button,Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"
import MapView, { Callout, Marker, Polygon, PROVIDER_GOOGLE } from "react-native-maps"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Standard,Night,Retro} from "../map-geo/map_many/mapStyles_variation"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
       showsUserLocation={true} >
<Marker 
            draggable
            coordinate={{
              latitude: 33.586050381932075,
              longitude:  -7.62976720854807,
              
            }
          }
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            
            title={'Gear9 CASABLANCA'}
            description={'219 Bd Zerktouni, angle Bd Brahim Roudani, Casablanca 20000'}


>
      <View>
    <Image source={{uri : "https://cdn-icons.flaticon.com/png/512/2377/premium/2377922.png?token=exp=1637334936~hmac=fb55cd244c2c62c66c10199bb1b18a92"}} 
      style={PIN_MARKER_STYLE}
    />
    </View>
  </Marker>
  <Marker 
            draggable
            coordinate={{
              
              latitude: 34.0222357021074,
              longitude:  -5.0075797678306015,
              
            }
          }
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            
            title={'Gear9 FES'}
            description={'Angle Rue Tarik Ibn Ziad Et Rue Abdelkrim Benjelloun 6ème Etage, Commune Agdal, Fès'}


>
      <View>
    <Image source={{uri : "https://cdn-icons.flaticon.com/png/512/2377/premium/2377922.png?token=exp=1637334936~hmac=fb55cd244c2c62c66c10199bb1b18a92"}} 
      style={PIN_MARKER_STYLE}
    />
    </View>
  </Marker>
 


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
      <Icon name ="adjust"  color="black" size={30} />
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
  const AUTOCOMPLETE_SEARCH=()=>{
    return (
        <View style={AUTO_STYLE}>
          <GooglePlacesAutocomplete

placeholder='Search'
onPress={(data, details = null) => {
  // 'details' is provided when fetchDetails = true
  console.log(data.place_id);
}}
query={{
  key: 'AIzaSyC2vu-vZH1nysQT7xXxZ4J-H2CbDx0iDq0',
  language: 'en',
}}

styles={
  {
    container: {
      flex: 1,
    },
    textInputContainer: {
      flexDirection: 'row',
    },
    textInput: {
      backgroundColor: '#FFFFFF',
      height: 44,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 15,
      flex: 1,
    },
    poweredContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderColor: '#c8c7cc',
      borderTopWidth: 0.5,
    },
    powered: {},
    listView: {},
    row: {
      backgroundColor: 'white',
      padding: 13,
      height: 44,
      flexDirection: 'row',
    },
    separator: {
      height: 0.5,
      backgroundColor: '#c8c7cc',
    },
    description: {},
    loader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 20,
    },
  }
}
/>
        </View>
    );
  }
  const [count,setCount]=useState(0);
  const Increment=()=>{
    setCount(count+1)
  };
  const Decrement=()=>{
    if (count>=1){
      setCount(count-1);
    }
    else {
      setCount(0)
    }
    
  };

  
  useEffect(()=>{
    //console.log(Standard)
  })
  return (
    <Screen style={ROOT} >
   <Map_View/>
  <MAPS/>
   <AUTOCOMPLETE_SEARCH/>
    </Screen>
  )
})

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
  //alignItems:'center',
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
const PIN_MARKER_STYLE : ViewStyle={
  height:metrics.heightPercentageToDP(7),
  width:metrics.widthPercentageToDP(7),
}
const AUTO_STYLE :ViewStyle={
  //alignSelf:'center',
  height:metrics.heightPercentageToDP(98),
  marginRight:metrics.widthPercentageToDP(20),
  marginLeft:metrics.widthPercentageToDP(10)
}
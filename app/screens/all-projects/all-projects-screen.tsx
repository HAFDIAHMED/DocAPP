import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { observer } from "mobx-react-lite"
import { TouchableWithoutFeedback, View, ViewStyle } from "react-native"
import { Button, ButtonProject, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
//import { TouchableOpacity } from 'react-native-gesture-handler';
import I18n from "i18n-js";
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"
import metrics from '../../theme/metrics';


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}


export const AllProjectsScreen = observer(function AllProjectsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [isVisible,setVisilibe]=useState(false);
   useEffect(()=>{
     console.log(isVisible)
   })
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="All Projects" style={{alignSelf:'center'}} />
      <View style={BUTTONS_COLUMN}>
      <ButtonProject    onPress={() => navigation.navigate("live_chat")} textLabel="LiveChat" iconName={"chatbubbles"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}}  />
      <ButtonProject    onPress={() => navigation.navigate("signin")} textLabel="Authentification" iconName={"people"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}} />
      <ButtonProject    onPress={() => navigation.navigate("pdf_view")} textLabel="PDF System" iconName={"document"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}} />
      <ButtonProject    onPress={() => navigation.navigate("qr_code_g")} textLabel="QR Code System" iconName={"qr-code"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}} />
      <ButtonProject    onPress={() => navigation.navigate("map_view")} textLabel="Gealocalisation" iconName={"map"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}} />
      <Text>{I18n.translate("welcomePartOne")}</Text>
      
      <TouchableOpacity onPress={()=>setVisilibe(true)}>
          <Icon  name="close" color="white" size={30}/>
        </TouchableOpacity>
        
      <BottomSheet
      isVisible={isVisible}
      containerStyle={{backgroundColor:'green',marginTop:metrics.heightPercentageToDP(50),borderTopLeftRadius:20,borderTopRightRadius:20}}
      modalProps={{
        animationType: 'fade',
        hardwareAccelerated: true,
        onRequestClose: () => {
          setVisilibe(!isVisible);
        },
        }}>
        <Icon  name="close" color="white" size={50} onPress={()=>setVisilibe(false)} style={{alignSelf:'center'}}/>

        <Button text="hello from bottomsheet2" onPress={()=>setVisilibe(!isVisible)}/>
        <TouchableOpacity onPress={()=>setVisilibe(!isVisible)}>
          <Text>helooooooooooooo</Text>
        </TouchableOpacity>
        


      </BottomSheet>
   
      </View>
    </Screen>
  )
})

const BUTTONS_COLUMN :ViewStyle={
  flexDirection:'column',
  marginTop:170,
  
  
}
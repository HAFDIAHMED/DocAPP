import React, { useCallback, useMemo, useRef } from 'react';
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { ButtonProject, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import BottomSheet from '@gorhom/bottom-sheet';


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const AllProjectsScreen = observer(function AllProjectsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
   const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="All Projects" style={{alignSelf:'center'}} />
      <View style={BUTTONS_COLUMN}>
      <ButtonProject    onPress={() => navigation.navigate("live_chat")} textLabel="LiveChat" iconName={"chatbubbles"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}}  />
      <ButtonProject    onPress={() => navigation.navigate("signin")} textLabel="Authentification" iconName={"people"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}} />
      <ButtonProject    onPress={() => navigation.navigate("pdf_view")} textLabel="PDF System" iconName={"document"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}} />
      <ButtonProject    onPress={() => navigation.navigate("qr_code_g")} textLabel="QR Code System" iconName={"qr-code"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}} />
      <ButtonProject    onPress={() => navigation.navigate("map_view")} textLabel="Gealocalisation" iconName={"map"} iconColor={"black"} iconSize={40} textlabelColor={"black"}  style={{margin:5}} />
      </View>
    </Screen>
  )
})

const BUTTONS_COLUMN :ViewStyle={
  flexDirection:'column',
  marginTop:170,
  
  
}
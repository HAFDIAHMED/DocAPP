import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { Screen, Text } from "../../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../../theme"
import metrics from "../../../theme/metrics"



export const MapGeoScreen = observer(function MapGeoScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="" />
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
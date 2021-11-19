import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import metrics from "../../theme/metrics"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const MapViewScreen = observer(function MapViewScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
     <Text preset="header" text="MAP VIEW" style={{ alignSelf:'center',margin: metrics.heightPercentageToDP(2)}} />
     <Button text="SEE MAP GEOLOCALISATION" />
     </Screen>
  )
})

import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import metrics from "../../theme/metrics"



export const PdfViewScreen = observer(function PdfViewScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <SafeAreaView>
      <Text preset="header" text="PDF VIEW" style={{ alignSelf:'center',margin: metrics.heightPercentageToDP(2)}} />
      <Button text="SEE PDF FILE"/>
      </SafeAreaView>
    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

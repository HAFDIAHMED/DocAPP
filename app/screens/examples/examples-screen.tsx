import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import {Picker} from '@react-native-picker/picker';


export const ExamplesScreen = observer(function ExamplesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Examples" style={{alignSelf:'center'}} />
    </Screen>
  )
})


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
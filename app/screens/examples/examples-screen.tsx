import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import {Picker} from '@react-native-picker/picker';
import metrics from "../../theme/metrics"


export const ExamplesScreen = observer(function ExamplesScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const [selectedLanguage,setSelectedLanguage]=useState("");
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Examples" style={{alignSelf:'center'}} />
      {/*<Picker
      style={PICKER}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue,itemIndex)=>{
        setSelectedLanguage(itemValue)
      }}
      mode="dropdown"

      >
        <Picker.Item label="Go" value="Go"/>
        <Picker.Item label="java" value="java"/>
      </Picker> */}
    </Screen>
  )
})


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const PICKER : ViewStyle={
  backgroundColor: "white",
  borderRadius:20,
  marginHorizontal:metrics.widthPercentageToDP(2),
}
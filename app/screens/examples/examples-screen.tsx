import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
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
  const [translation, setTranslation] = useState(0);
  useEffect(() => {
    //setTranslation(80);
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        setTranslation(i);
      }, 100 * i);
    }
    
  }, []);
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="Animations" style={{alignSelf:'center'}} />
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
      <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        transform: [{ translateX: translation }],
      }}
    />
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius:50,
        backgroundColor: 'green',
        transform: [{ translateX: translation }],
      }}
    />
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
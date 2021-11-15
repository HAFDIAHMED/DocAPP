import React from "react"
import { observer } from "mobx-react-lite"
import { TextInput, View, ViewStyle } from "react-native"
import { Profile, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import metrics from "../../theme/metrics"



export const ProfileScreen = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="SINGIN" style={HEADER_STYLE} />
      
      <View style={INPUT_STYLE}>
          <TextInput 
          placeholder="Enter your Password"
          />
      </View>
     <Profile  textinput="email"/>
    </Screen>
  )
})
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
const HEADER_STYLE : ViewStyle = {
  alignSelf : 'center',
  marginVertical:metrics.heightPercentageToDP(5),
}
const INPUT_STYLE : ViewStyle={
  borderWidth:1,
  marginHorizontal:metrics.widthPercentageToDP(5),
  marginVertical:metrics.heightPercentageToDP(1),
  borderRadius:20,
  backgroundColor:'white',
}
const INPUT_CONTAINER : ViewStyle={
}
import React, { useCallback, useMemo, useRef } from 'react';
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
//import BottomSheet from '@gorhom/bottom-sheet';


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const BottomSheetExampleScreen = observer(function BottomSheetExampleScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="bottom sheet example" style={{alignSelf:'center'}} />
    </Screen>
  )
})

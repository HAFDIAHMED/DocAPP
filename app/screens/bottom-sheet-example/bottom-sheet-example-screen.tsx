import React, { useCallback, useMemo, useRef } from 'react';
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import BottomSheet from '@gorhom/bottom-sheet';


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const BottomSheetExampleScreen = observer(function BottomSheetExampleScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['1%','25%', '50%','70%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="bottom sheet example" style={{alignSelf:'center'}} />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={{flex: 1,
    alignItems: 'center',}}>
          <Text style={{color:"black"}}>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </Screen>
  )
})

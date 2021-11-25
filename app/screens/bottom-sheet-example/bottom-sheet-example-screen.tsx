import React, { useCallback, useMemo, useRef, useState } from 'react';
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';


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
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );
  const [sheetIndex,setSheetIndex]=useState(2)
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="bottom sheet example" style={{alignSelf:'center'}} />
      <Button text="open sheet" onPress={()=>{setSheetIndex(3);console.log("")}} />
      <BottomSheet
      visible ={true}
        ref={bottomSheetRef}
        index={sheetIndex}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
       backdropComponent={renderBackdrop}

        //onClose={()=>}
      >
        <View style={{flex: 1,
    alignItems: 'center',}}>
          <Text style={{color:"black"}}>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </Screen>
  )
})

import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"
import BottomSheet, { BottomSheetBackdrop, BottomSheetProps } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from "react"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}


export interface BottomSheetComponenetProps extends BottomSheetProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

}

/**
 * Describe your component here
 */
export const BottomSheetComponenet = observer(function BottomSheetComponenet(props: BottomSheetComponenetProps) {
  const { style } = props
  const styles = flatten([CONTAINER, style])
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['1%','15%','25%', '50%','70%'], []);

  // callbacks
  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
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
  
  return (
    <BottomSheet
     
        ref={bottomSheetRef}
        //index={1}
        snapPoints={snapPoints}
        //onChange={handleSheetChanges}
       backdropComponent={renderBackdrop}
       enablePanDownToClose={true}
      // style={{backgroundColor:"green",borderWidth:2,borderRadius:40}}
       //handleStyle={{backgroundColor:'red'}}
        //backgroundStyle={{backgroundColor:'pink'}}
       // keyboardBehavior='extend'
      >
        <View style={{flex: 1,
    alignItems: 'center',}}>
          <Text style={{color:"black"}}>Awesome 🎉</Text>
        </View>
      </BottomSheet>
  )
})

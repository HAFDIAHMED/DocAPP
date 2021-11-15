import * as React from "react"
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"
import metrics from "../../theme/metrics"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}
const INPUT_STYLE : ViewStyle={
  borderWidth:1,
  marginHorizontal:metrics.widthPercentageToDP(5),
  marginVertical:metrics.heightPercentageToDP(1),
  borderRadius:20,
  backgroundColor:'white',
}

export interface ProfileProps extends TextInputProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  textinput : string,
  forwardeRef? : any
}

/**
 * Describe your component here
 */
export const Profile = observer(function Profile(props: ProfileProps) {
  const { style,forwardeRef,...rest } = props
  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      <View style={INPUT_STYLE}> 
      <TextInput 
      placeholder={props.textinput}
      {...rest}
      ref={forwardeRef}
      />
      </View>
    </View>
  )
})
